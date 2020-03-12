
import { parrotUrl } from '@/components/imgurls'
const parrotMix = {
  data() {
    return {
      PARROTS: 25, // 半径
      DIAMETER: 30,
      ROTATION: 0.1,
      SPEED: 0.3,
      SPACING: 4,
      OFFSET: 20
    }
  },
  computed: {
    parrotsSrcs() {
      const list = []
      for (let i = 0; i - this.PARROTS; i++) {
        list.push(parrotUrl[~~(Math.random() * 18)]) // gif图序列
      }
      return list
    }
  }
}
export {
  parrotMix
}
