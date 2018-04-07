## Elm

_A delightful language for reliable webapps_

|>

### Delightful

* Simple architecture
* Purely functional language <!-- .element: class="fragment" data-fragment-index="2" -->
* Helpful compilation errors <!-- .element: class="fragment" data-fragment-index="3" -->
* Easily injectable <!-- .element: class="fragment" data-fragment-index="4" -->
* Enforced semantic versioning <!-- .element: class="fragment" data-fragment-index="5" -->

<|

### The Elm architecture (TEA)

![](slides/img/tea.png)

_Seem familiar?_

_That's because Redux was inspired by TEA_

<|

### Purely functional language

* Strong Types! Immutability!
* Null? Undefined? Ain't nobody got time for that. <!-- .element: class="fragment" data-fragment-index="3" -->
* No runtime exceptions <!-- .element: class="fragment" data-fragment-index="4" -->
* Pattern matching (never miss a case!) <!-- .element: class="fragment" data-fragment-index="5" -->

All of the above lead to faster feedback during development, causing less bugs. <!-- .element: class="fragment" data-fragment-index="6" -->

|>

### Helpful compilation errors

```
-- ALIAS PROBLEM ---------------------------------- Tree.elm
This type alias is recursive, forming an infinite type!
2|>type alias Branch =
3|>    { x : Int
4|>    , y : Int
5|>    , name : String
6|>    , children : List Branch
7|>    }
When I expand a recursive type alias, 
it just keeps getting bigger and bigger.
So dealiasing results in an infinitely large type! 
Try this instead:
    type Branch
        = Branch { x : Int
                 , y : Int
                 , name : String
                 , children : List Branch 
                 }
This is kind of a subtle distinction. 
I suggested the naive fix, but you can
often do something a bit nicer. 
So I would recommend reading more at:
<https://github.com/elm-lang/elm-compiler/blob/0.17.1/hints/recursive-alias.md>
Detected errors in 1 module.
```

|>

### Compare to Angular (even with TypeScript!)

```
ERROR TypeError: Cannot read property 'length' of undefined
    at Object.eval [as updateDirectives] (QuotesComponent.html:5)
    at Object.debugUpdateDirectives [as updateDirectives] (core.js:14655)
    at checkAndUpdateView (core.js:13802)
    at callViewAction (core.js:14153)
    at execComponentViewsAction (core.js:14085)
    at checkAndUpdateView (core.js:13808)
    at callViewAction (core.js:14153)
    at execComponentViewsAction (core.js:14085)
    at checkAndUpdateView (core.js:13808)
    at callWithDebugContext (core.js:15056)
```

<|

# Demo

<|

# Resources if you wanna learn more

* [The ElmLang website](http://elm-lang.org/)
* [The Elm Architecture](https://guide.elm-lang.org/architecture/)
* [Diffent examples](http://elm-lang.org/examples)
* [Petindr Elm Kata](https://github.com/jansabbe/petindr_elm_kata)
* [LiveCoding Petindr Elm Kata](https://www.youtube.com/channel/UC-0Zos25VCU6h6bDiv7bh9w/videos)
* [Elmlang Slack](https://elmlang.herokuapp.com/)