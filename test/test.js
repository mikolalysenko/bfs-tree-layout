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

  var cases = [10, 50, 31, 32, 33]
  for(var j=0; j<cases.length; ++j) {
    var N = cases[j]
    var arr = []
    for(var i=0, k=layout.begin(N); i<N; ++i, k=layout.next(N, k)) {
      arr.push(k)
    }
    arr.sort(function(a,b) { return a-b })
    for(var i=0; i<N; ++i) {
      t.equals(arr[i], i, "forward N="+N + "; " + i)
    }
    arr = []
    for(var i=0, k=layout.end(N); i<N; ++i, k=layout.prev(N, k)) {
      arr.push(k)
    }
    arr.sort(function(a,b) { return a-b })
    for(var i=0; i<N; ++i) {
      t.equals(arr[i], i, "reverse N="+N + "; " + i)
    }
  }
  
  t.end()
})