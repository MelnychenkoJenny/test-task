"use strict";(self.webpackChunktest_task=self.webpackChunktest_task||[]).push([[988],{3988:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,i,c,s,u,o=t(9941),a=t(2791),l=t(7689),p=t(6584),f=t(7155),d=t(2658),g=t(168),x=t(6444),b=x.ZP.ul(r||(r=(0,g.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-top: 15px;\n  li span {\n    font-weight: 500;\n    margin-right: 5px;\n  }\n  @media screen and (min-width: 500px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media screen and (min-width: 1200px) {\n    display: flex;\n    gap: 29px;\n  }\n"]))),m=t(184),h=function(){return(0,m.jsx)(b,{})},v=(x.ZP.div(i||(i=(0,g.Z)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n  @media screen and (min-width: 590px) {\n    display: flex;\n    justify-content: space-around;\n  }\n"]))),x.ZP.ul(c||(c=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n  @media screen and (min-width: 590px) {\n    text-align: left;\n  }\n"]))),x.ZP.h3(s||(s=(0,g.Z)(["\n  text-align: center;\n  margin-bottom: 8px;\n"]))),x.ZP.p(u||(u=(0,g.Z)(["\n  padding: 8px;\n  border: 1px solid ",";\n  border-radius: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n  font-weight: 600;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.colors.accentDark}),(function(e){return e.theme.colors.white}))),Z=function(){var e=(0,f.Z)(p.tf),n=e.brewers_tips,t=e.contributed_by;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(v,{children:["Brewers tips: ",n]}),(0,m.jsxs)("p",{children:["Contributed by: ",t]})]})},R=t(8425),j=function(){var e,n,t=(0,f.Z)(p.sv),r=(0,f.Z)(p.tf),i=(0,f.Z)(p.NH),c=(0,l.UO)().id,s=(0,l.TH)(),u=(0,a.useRef)(null!==(e=null===(n=s.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),g=r.image_url,x=r.name,b=r.tagline,v=r.first_brewed,j=r.description;return(0,a.useEffect)((function(){t(c)}),[t,c]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.a5,{to:u.current,children:"Go back"}),i?(0,m.jsx)(o.g,{}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d.Mv,{children:[(0,m.jsx)(d.Ee,{src:g||R,alt:x,width:"80"}),(0,m.jsxs)(d.x_,{children:[(0,m.jsx)("h2",{style:{textAlign:"center",marginBottom:"15px"},children:x}),(0,m.jsx)("p",{style:{textAlign:"center",marginBottom:"10px"},children:b}),(0,m.jsxs)("p",{style:{textAlign:"center",marginBottom:"10px"},children:["First-brewed: ",v]}),(0,m.jsx)("p",{children:j}),(0,m.jsx)(h,{}),(0,m.jsx)(Z,{})]})]})})]})}},6584:function(e,n,t){t.d(n,{KU:function(){return x},Mr:function(){return s},NH:function(){return h},Np:function(){return a},O2:function(){return i},Pp:function(){return f},Q$:function(){return u},Uu:function(){return m},cT:function(){return r},ep:function(){return o},h$:function(){return p},m_:function(){return l},qS:function(){return c},sv:function(){return d},tf:function(){return g},yI:function(){return b}});var r=function(e){return e.fetchRecipes},i=function(e){return e.recipes},c=function(e){return e.selectRecipe},s=function(e){return e.selectedRecipes},u=function(e){return e.currentPage},o=function(e){return e.nextPage},a=function(e){return e.prevPage},l=function(e){return e.visibleRecipes},p=function(e){return e.getVisibleRecipes},f=function(e){return e.pageForVisible},d=function(e){return e.getRecipeById},g=function(e){return e.recipeDetails},x=function(e){return e.deleteButtonVisible},b=function(e){return e.deleteSelectedRecipes},m=function(e){return e.isPageLoaded},h=function(e){return e.loading}},7155:function(e,n,t){var r=t(9439),i=t(4165),c=t(3433),s=t(8683),u=t(5861),o=t(1243),a=t(5847),l=t(1085),p="https://api.punkapi.com/v2/beers",f=(0,a.Ue)((0,l.tJ)((function(e,n){return{recipes:[],loading:!1,error:null,currentPage:1,isPageLoaded:!1,pageForVisible:1,lastIndexRecipe:null,visibleRecipes:[],selectedRecipes:[],recipeDetails:[],deleteButtonVisible:!1,fetchRecipes:function(){var t=(0,u.Z)((0,i.Z)().mark((function t(r){var u,a,l;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({loading:!0}),t.prev=1,t.next=4,o.Z.get("".concat(p,"?page=").concat(r,"&per_page=").concat(30));case 4:return u=t.sent,t.next=7,u.data;case 7:if(0!==(a=t.sent).length){t.next=10;break}return t.abrupt("return");case 10:e((function(e){return(0,s.Z)((0,s.Z)({},e),{},{recipes:[].concat((0,c.Z)(e.recipes),(0,c.Z)(a)),loading:!1,isPageLoaded:!0,deleteButtonVisible:!1})})),n().getVisibleRecipes(r),t.next=22;break;case 14:if(t.prev=14,t.t0=t.catch(1),l=t.t0,400!==t.t0.statusCode){t.next=21;break}return t.next=20,t.t0.json();case 20:l=t.sent;case 21:e({error:l});case 22:return t.prev=22,e({loading:!1}),t.finish(22);case 25:case"end":return t.stop()}}),t,null,[[1,14,22,25]])})));return function(e){return t.apply(this,arguments)}}(),nextPage:function(){e((function(e){return e.currentPage>e.pageForVisible?{pageForVisible:e.pageForVisible+1}:{currentPage:e.currentPage+1,pageForVisible:e.pageForVisible+1,isPageLoaded:!1}}))},prevPage:function(){e({loading:!0}),e((function(e){return{pageForVisible:e.pageForVisible-1,loading:!1}}))},getVisibleRecipes:function(n){e({loading:!0}),e((function(e){var t=15*(n-1),r=15*n;return{visibleRecipes:e.recipes.slice(t,r),loading:!1}}))},selectRecipe:function(n){e((function(e){return{selectedRecipes:e.selectedRecipes.includes(n)?e.selectedRecipes.filter((function(e){return e!==n})):[].concat((0,c.Z)(e.selectedRecipes),[n]),deleteButtonVisible:!0}}))},setlastIndexRecipe:function(n){e({lastIndexRecipe:n})},deleteSelectedRecipes:function(){e((function(e){var n=e.recipes.filter((function(n){return!e.selectedRecipes.includes(n)}));return(0,s.Z)((0,s.Z)({},e),{},{recipes:n,loading:!1,error:null,selectedRecipes:[],deleteButtonVisible:!1})}))},getRecipeById:function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var r,c,s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e((function(){return{loading:!0}})),n.prev=1,n.next=4,o.Z.get("".concat(p,"/").concat(t));case 4:return r=n.sent,n.next=7,r.data[0];case 7:c=n.sent,e({recipeDetails:c,isLoading:!1}),n.next=19;break;case 11:if(n.prev=11,n.t0=n.catch(1),s=n.t0,400!==n.t0.statusCode){n.next=18;break}return n.next=17,n.t0.json();case 17:s=n.sent;case 18:e({error:s});case 19:return n.prev=19,e({loading:!1}),n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[1,11,19,22]])})));return function(e){return n.apply(this,arguments)}}()}}),{name:"recipes-storage",getStorage:function(){return(0,l.FL)((function(){return localStorage}))},partialize:function(e){return Object.fromEntries(Object.entries(e).filter((function(e){return"selectedRecipes"!==(0,r.Z)(e,1)[0]})))}}));n.Z=f},8425:function(e,n,t){e.exports=t.p+"static/media/imagesEmpty.bb23509fde4426ae4f5f.png"}}]);
//# sourceMappingURL=988.6817e969.chunk.js.map