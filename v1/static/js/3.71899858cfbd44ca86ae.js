webpackJsonp([3],{tLiD:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("Xxa5"),a=e.n(n),i=e("exGp"),r=e.n(i),o=e("CCn6"),c={name:"post",data:function(){return{posts:[]}},mounted:function(){this.$refs.curWin.style.height=window.screen.availHeight+"px"},created:function(){this.getPosts()},methods:{getPosts:function(){var t=this;return r()(a.a.mark(function s(){var e;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,o.a.getPosts();case 2:e=s.sent,console.log("%c getPosts","color: green",posts),e.success&&(t.posts=e.posts);case 5:case"end":return s.stop()}},s,t)}))()}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"curWin",attrs:{id:"posts"}},[t._m(0),t._v(" "),e("ul",{staticClass:"posts"},t._l(t.posts,function(s,n){return e("li",{key:n,staticClass:"post"},[e("span",{staticClass:"postTitle"},[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"author"},[t._v(t._s(s.author))]),t._v(" "),e("span",{staticClass:"update"},[t._v(t._s(s.updateAt))])])}))])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"titleF title"},[this._v("日"),s("span",{staticClass:"titleB"},[this._v("志")])])}]};var l=e("VU/8")(c,u,!1,function(t){e("zIA2")},"data-v-668ffba9",null);s.default=l.exports},zIA2:function(t,s){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2pzLzMuNzE4OTk4NThjZmJkNDRjYTg2YWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL2hvbWUvUG9zdHMudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgaWQ9XCJwb3N0c1wiIHJlZj1cImN1cldpblwiPlxuICAgIDxoMSBjbGFzcz1cInRpdGxlRiB0aXRsZVwiPuaXpTxzcGFuIGNsYXNzPVwidGl0bGVCXCI+5b+XPC9zcGFuPjwvaDE+XG5cbiAgICA8dWwgY2xhc3M9XCJwb3N0c1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJwb3N0XCIgOmtleT1cImluZGV4XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcG9zdHNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9zdFRpdGxlXCI+e3tpdGVtLnRpdGxlfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImF1dGhvclwiPnt7aXRlbS5hdXRob3J9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidXBkYXRlXCI+e3tpdGVtLnVwZGF0ZUF0fX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL3NlcnZpY2UvYXBpLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcInBvc3RcIixcbiAgICBkYXRhKCl7XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHBvc3RzOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIHRoaXMuJHJlZnMuY3VyV2luLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgKyBcInB4XCI7XG4gICAgfSxcbiAgICBjcmVhdGVkKCl7XG4gICAgICAgIHRoaXMuZ2V0UG9zdHMoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBhc3luYyBnZXRQb3N0cygpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXRQb3N0cygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBnZXRQb3N0c1wiLCBcImNvbG9yOiBncmVlblwiLCBwb3N0cyk7XG4gICAgICAgICAgICBpZihyZXN1bHQuc3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cyA9IHJlc3VsdC5wb3N0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgICNwb3N0c3tcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogNnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzlCOUI5QjtcbiAgICB9XG4gICAgLnRpdGxlRntcbiAgICAgICAgY29sb3I6ICM5QjlCOUI7XG4gICAgfVxuICAgIC50aXRsZUJ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICNGRkFGQjY7XG4gICAgfVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGFnZXMvaG9tZS9Qb3N0cy52dWUiXSwibWFwcGluZ3MiOiJBQWdCQSIsInNvdXJjZVJvb3QiOiIifQ==