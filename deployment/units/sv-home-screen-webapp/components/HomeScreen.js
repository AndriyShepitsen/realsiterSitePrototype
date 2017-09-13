Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _Card=require('material-ui/Card');var _Card2=_interopRequireDefault(_Card);
var _styles=require('material-ui/styles');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactRelay=require('react-relay');

var _ResponsiveContentArea=require('../../urb-base-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2=_interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles={
card:{
minWidth:275,
minHeight:400}};var



HomeScreen=function(_React$Component){_inherits(HomeScreen,_React$Component);function HomeScreen(){_classCallCheck(this,HomeScreen);return _possibleConstructorReturn(this,(HomeScreen.__proto__||Object.getPrototypeOf(HomeScreen)).apply(this,arguments));}_createClass(HomeScreen,[{key:'render',value:function render()







{var _props=
this.props,classes=_props.classes,Viewer=_props.Viewer;

var Agents=Viewer.Agents.edges.map(function(_ref){var node=_ref.node;
return node;
});

return(
_react2.default.createElement(_ResponsiveContentArea2.default,null,
_react2.default.createElement(_Card2.default,{className:classes.card},
_react2.default.createElement(_Card.CardHeader,{title:'Home'}),
_react2.default.createElement(_Card.CardContent,null,
_react2.default.createElement('h3',null,'Office Agents'),
_react2.default.createElement('hr',null),
_react2.default.createElement('ol',null,
Agents.map(function(agent,key){
return(
_react2.default.createElement('li',{key:key},
_react2.default.createElement('span',null,' ',agent.FirstName,' '),
_react2.default.createElement('span',null,' ',agent.LastName),
_react2.default.createElement('span',null,' ',agent.UserId)));


}))))));





}}]);return HomeScreen;}(_react2.default.Component);HomeScreen.contextTypes={rbCtx:_propTypes2.default.object};exports.default=


(0,_reactRelay.createFragmentContainer)(
(0,_styles.withStyles)(styles)(HomeScreen),{Viewer:function Viewer(){return require('./__generated__/HomeScreen_Viewer.graphql');}});
//# sourceMappingURL=HomeScreen.js.map