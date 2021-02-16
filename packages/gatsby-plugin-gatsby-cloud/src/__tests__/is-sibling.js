import { isSibling } from "../is-sibling"

describe(`isSibling`, () => {
  it(`returns true for siblings with a colon`, async () => {
    expect(
      isSibling(
        {
          path: `/param/:param1`,
        },
        {
          path: `/param/static`,
        }
      )
    ).toBe(true)
  })
  it(`returns true for siblings with an asterisk`, async () => {
    expect(
      isSibling(
        {
          path: `/param/*param1`,
        },
        {
          path: `/param/static`,
        }
      )
    ).toBe(true)
  })
  it(`returns false for non siblings`, async () => {
    expect(
      isSibling(
        {
          path: `/param/*param1`,
        },
        {
          path: `/param/static/blah`,
        }
      )
    ).toBe(false)
  })
  it(`returns false for equal paths`, async () => {
    expect(
      isSibling(
        {
          path: `/param/param1`,
        },
        {
          path: `/param/param1`,
        }
      )
    ).toBe(false)
  })
  it(`returns false for sibling static paths`, async () => {
    expect(
      isSibling(
        {
          path: `/param/param1`,
        },
        {
          path: `/param/static`,
        }
      )
    ).toBe(false)
  })
  it(`returns true for sibling paths with extra slashes`, async () => {
    expect(
      isSibling(
        {
          path: `/param/:param1/`,
        },
        {
          path: `/param/static`,
        }
      )
    ).toBe(true)
  })
})
