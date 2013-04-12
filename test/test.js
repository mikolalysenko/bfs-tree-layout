var layout = require("../bfs")
  , layoutTester = require("tree-layout-tester")


require("tap").test("bfs-tree-layout", function(t) {

  var testTree = layoutTester.bind(undefined, t, layout)
    , T = layoutTester.T
  testTree(T(0))
  testTree(T(0, T(1)))
  testTree(T(0, T(1), T(2)))
  testTree(T(0, T(1, T(3)), T(2)))
  testTree(T(0, T(1, T(3), T(4)), T(2)))
  testTree(T(0, T(1, T(3), T(4)), T(2, T(5))))
  testTree(T(0, T(1, T(3), T(4)), T(2, T(5), T(6))))
  testTree(T(0, T(1, T(3, T(7)), T(4)), T(2, T(5), T(6))))
  
  t.end()
})