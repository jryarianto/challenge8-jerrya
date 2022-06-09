const { NotFoundError } = require('../errors')

class ApplicationController {
  handleGetRoot = (req, res) => {
    this.test = res.status(200).json({
      status: 'OK',
      message: 'BCR API is up and running!'
    })
  }

  handleNotFound = (req, res) => {
    const err = new NotFoundError(req.method, req.url)

    this.test2 = res.status(404).json({
      error: {
        name: err.name,
        message: err.message,
        details: err.details
      }
    })
  }

  handleError = (err, req, res) => {
    this.test3 = res.status(500).json({
      error: {
        name: err.name,
        message: err.message,
        details: err.details || null
      }
    })
  }

  getOffsetFromRequest (req) {
    const { page = 1, pageSize = 10 } = req.query
    const offset = (page - 1) * pageSize
    this.test4 = offset
    return this.test4
  }

  buildPaginationObject (req, count) {
    const { page = 1, pageSize = 10 } = req.query
    const pageCount = Math.ceil(count / pageSize)
    this.test5 = {
      page,
      pageCount,
      pageSize,
      count
    }
    return this.test5
  }
}

module.exports = ApplicationController
