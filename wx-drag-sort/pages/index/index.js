Page({

  data: {
    // y1: 0,
    // y2: 0,
    // canMove: true,
    // x: 0,
    // y: 0
    top1: 0,
    top2: 0,
    top3: 0,
    follow: true,
    prev_y: 0,
    prev_y2: 0,
    prev_y3: 0,
    changed: false,
    changed2: false,
    changed3: false,
    dragged: 0
  },

  onLoad() {
    this.setData({
      top1: 0,
      top2: 500,
      top3: 700
    })
  },

  touchstart3(e) {
    this.setData({
      dragged: 3
    })
  },

  touchend3(e) {
    this.setData({
      top3: this.data.changed3 ? 500 : 700
    })
  },

  change3(e) {
    const y = e.detail.y
    console.log(y)

    if (this.data.dragged != 3) {
      return
    }

    if (y < 250 + 50 && this.data.prev_y3 >= 300) {
      this.setData({
        top2: (500 + 300),
        changed3: true
      })
    }

    if (y >= 300 && this.data.prev_y3 < 300) {
      this.setData({
        top2: 500,
        changed3: false
      })
    }

    this.data.prev_y3 = y
  },

  /** 滑块2,以被拖动元素的高度一半为阈值 */

	touchstart2(e) {
    this.setData({
      dragged: 2
    })
	},

  touchend2(e) {
    this.setData({
      top2: this.data.changed2 ? (this.data.changed3 ? 800 : 0) : 500
    })
  },

  change2(e) {
    const y = e.detail.y
    const prev_y2 = this.data.prev_y2
    const threshold = this.data.top2 / 2 / 2
    // console.log('y:', y, '#', 'prev_y2:', prev_y2)

		if (this.data.dragged != 2) {
			return
		}

    if (y < 125 && prev_y2 >= 125) {
      this.setData({
        top1: 200,
        changed2: true
      })
    }

    if (y >= 125 && prev_y2 < 125) {
      this.setData({
        top1: 0,
        changed2: false
      })
    }

    if (y > 250 + 75 && prev_y2 <= 325) {
      this.setData({
        top3: 500,
        changed2: true,
        changed3: true
      })
    }

    if (y <= 325 && prev_y2 > 325) {
      this.setData({
        top3: 700,
        changed2: false,
        changed3: false
      })
    }

    this.data.prev_y2 = y
  },

  /** 滑块1 */

	touchstart(e) {
    this.setData({
      dragged: 1
    })
	},

  touchend(e) {
    this.setData({
      top1: this.data.changed ? 200 : 0
    })
  },

  change(e) {
    let y = e.detail.y
    let prev_y = this.data.prev_y
    const v = this.data.top2 / 2 / 2
    // console.log('y:', y, '#', 'prev_y:', prev_y)

		if (this.data.dragged != 1) {
			return
		}

    // 取小
    if (y >= 50 && prev_y < 50) {
      this.setData({
        top2: 0,
        changed: true
      })
    }

    if (y < 50 && prev_y >= 50) {
      this.setData({
        top2: 500,
        changed: false
      })
    }

    this.data.prev_y = y
  },
})
