import Router from 'koa-router'
import Redis from 'koa-redis'
import NodeMailer from 'nodemailer'

import User from '../dbs/models/users'
import Passport from './utils/passport'
import Email from '../dbs/config'
import axios from 'axios'

const router = new Router({
  prefix: '/user'
})

const Store = new Redis().client

router.post('/signup', async ctx => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body
  if (code) {
    const savecode = await Store.hget(`nodemail:${username}`, 'code')
    // const saveExpire = await Store.hget(`nodemail: ${username}`, 'expire')
    if (code === savecode) {
      // if((new Date().getTime() - saveExpire) > 0){
      //   ctx.body = {
      //     code : -1,
      //     msg: '验证码已过期，请重新发送'
      //   }
      //   return false
      // }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }
  const user = await User.find({
    username
  })
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '该用户已被注册'
    }
    return false
  }
  const nuser = await User.create({
    username,
    password,
    email
  })
  if (nuser) {
    const res = await axios.post('/user/login', {
      username,
      password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function (error, user, info, status) {
    if (error) {
      ctx.body = {
        code: -1,
        msg: error
      }
    } else {
      if (user) {
        ctx.body = {
          code: 1,
          msg: '登录成功'
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

router.post('/verify', async (ctx, next) => {
  const username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire > 0) {
    ctx.body = {
      code: -1,
      msg: '请求过于频繁'
    }
    return false
  }
  const transporter = NodeMailer.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  const ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  const mailOption = {
    from: `"认证邮件"<${Email.smtp.user}>`,
    to: ko.email,
    subject: 'Email Test',
    html: `邮箱SMTP测试  code为${ko.code}`
  }
  await transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      return console.log(error)
    } else {
      // Store.hmset(`nodemail:${ko.user}, code: ${ko.code}, expire: ${ko.expire}, email: ${ko.email}`)
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码发送，有效期1分钟'
  }
})
router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const { username, email } = ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  } else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

export default router
