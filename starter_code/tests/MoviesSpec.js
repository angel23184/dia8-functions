/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe("testing the returnAnEmployee function", () => {
  it('expect the returned employee to have Javi as his name', function () {
    expect(returnAnEmployee("javi")).toEqual({name: "javi", salary: 20000})
  })
  
  it('expect the returned employee to have Dani as his name', function () {
    expect(returnAnEmployee("Dani")).toEqual({name: "Dani", salary: 20000})
  })
  
  it('expect the returned employee to have Sonia as his name', function () {
    expect(returnAnEmployee("sonia")).toEqual({name: "sonia", salary: 20000})
  })
})

describe("testing the returnsNull and the doesNotReturnsANull functions", () => {
  it ('expect the function to return a null', function () {
    expect(returnsNull()).toBeNull()
  })
  
  it ('expect the function *NOT* to return a null', function () {
    expect(doesNotReturnsANull()).not.toBeNull()
  })
})



function returnAnEmployee(nameParam) {
  return {
      name: nameParam,
      salary: 20000
  }
}

function returnsNull () {
  return null
}

function doesNotReturnsANull () {
  return "hola"
}