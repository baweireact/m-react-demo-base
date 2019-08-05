import React, {Component} from 'react'

// class Index extends Component {
//   render() {
//     return (
//       <div>
//         hello reactjs
//       </div>
//     )
//   }
// }

function Index (props) {
  return (
    <div>
      hello reactjs{props.text}
    </div>
  )
}

// const Index = React.createClass({
//   render() {
//     return (
//       <div>
//         hello reactjs
//       </div>
//     )
//   }
// })

// var Index = React.createClass({
//   render:function(){
//       return (
//         <h1>迹忆博客</h1>
//       );
//   },
// });

//var Index = React.createElement('li', null, 'one');

export default Index