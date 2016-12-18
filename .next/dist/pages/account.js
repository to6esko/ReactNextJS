'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('D:\\dev\\ReactNextJS\\node_modules\\react\\react.js');

var _react2 = _interopRequireDefault(_react);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

var _css = require('D:\\dev\\ReactNextJS\\node_modules\\next\\dist\\lib\\css.js');

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var id = _ref.url.query.id;

    var item = _.find(_posts2.default, { id: id });

    return _react2.default.createElement(
        'div',
        { className: (0, _css.style)(styles.main) },
        _react2.default.createElement(
            'div',
            { className: (0, _css.style)(styles.header) },
            _react2.default.createElement(
                'h3',
                null,
                ' NEXTHRONE - THE REVELATION OF GAME OF THRONES\' CHARACTERS '
            )
        ),
        _react2.default.createElement(
            'div',
            { className: (0, _css.style)(styles.panel) },
            _react2.default.createElement(
                'h1',
                { className: (0, _css.style)(styles.heading) },
                'Character:',
                item.codeName,
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                'Real Name:',
                item.realName,
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                'Brief Description:',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'span',
                    null,
                    item.story
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: (0, _css.style)(styles.singlePhoto) },
            _react2.default.createElement('img', { src: item.display_src, alt: item.realName, width: 500, height: 500 })
        )
    );
};

var styles = {
    main: {
        padding: '50px'
    },

    header: {
        font: '15px Monaco',
        textAlign: 'center'
    },

    panel: {
        float: 'right',
        marginRight: '140px',
        width: '300px'
    },

    singlePhoto: {
        border: '1px solid #999',
        width: '500px',
        height: '500px',
        float: 'left'
    },

    heading: {
        font: '15px Monaco'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkZXZcXFJlYWN0TmV4dEpTXFxwYWdlc1xcYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJfIiwiaWQiLCJ1cmwiLCJxdWVyeSIsIml0ZW0iLCJmaW5kIiwic3R5bGVzIiwibWFpbiIsImhlYWRlciIsInBhbmVsIiwiaGVhZGluZyIsImNvZGVOYW1lIiwicmVhbE5hbWUiLCJzdG9yeSIsInNpbmdsZVBob3RvIiwiZGlzcGxheV9zcmMiLCJwYWRkaW5nIiwiZm9udCIsInRleHRBbGlnbiIsImZsb2F0IiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImJvcmRlciIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxDOzs7Ozs7a0JBRUcsZ0JBQWdDO0FBQUEsUUFBYkMsRUFBYSxRQUE3QkMsR0FBNkIsQ0FBdEJDLEtBQXNCLENBQWJGLEVBQWE7O0FBQzNDLFFBQU1HLE9BQU9KLEVBQUVLLElBQUYsa0JBQWMsRUFBRUosSUFBSUEsRUFBTixFQUFkLENBQWI7O0FBRUEsV0FDSTtBQUFBO0FBQUEsVUFBSyxXQUFXLGdCQUFNSyxPQUFPQyxJQUFiLENBQWhCO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVyxnQkFBTUQsT0FBT0UsTUFBYixDQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQURKO0FBSUk7QUFBQTtBQUFBLGNBQUssV0FBVyxnQkFBTUYsT0FBT0csS0FBYixDQUFoQjtBQUNJO0FBQUE7QUFBQSxrQkFBSSxXQUFXLGdCQUFNSCxPQUFPSSxPQUFiLENBQWY7QUFBQTtBQUNlTixxQkFBS08sUUFEcEI7QUFFSSx5REFGSjtBQUdJLHlEQUhKO0FBQUE7QUFJZVAscUJBQUtRLFFBSnBCO0FBS0kseURBTEo7QUFNSSx5REFOSjtBQUFBO0FBUUkseURBUko7QUFTSSx5REFUSjtBQVVJO0FBQUE7QUFBQTtBQUFPUix5QkFBS1M7QUFBWjtBQVZKO0FBREosU0FKSjtBQWtCSTtBQUFBO0FBQUEsY0FBSyxXQUFXLGdCQUFNUCxPQUFPUSxXQUFiLENBQWhCO0FBQ0ksbURBQUssS0FBS1YsS0FBS1csV0FBZixFQUE0QixLQUFLWCxLQUFLUSxRQUF0QyxFQUFnRCxPQUFPLEdBQXZELEVBQTRELFFBQVEsR0FBcEU7QUFESjtBQWxCSixLQURKO0FBd0JILEM7O0FBRUQsSUFBTU4sU0FBUztBQUNYQyxVQUFNO0FBQ0ZTLGlCQUFRO0FBRE4sS0FESzs7QUFLWFIsWUFBUTtBQUNKUyxjQUFNLGFBREY7QUFFSkMsbUJBQVU7QUFGTixLQUxHOztBQVVYVCxXQUFPO0FBQ0hVLGVBQU8sT0FESjtBQUVIQyxxQkFBYSxPQUZWO0FBR0hDLGVBQU07QUFISCxLQVZJOztBQWdCWFAsaUJBQWE7QUFDVFEsZ0JBQVEsZ0JBREM7QUFFVEQsZUFBTyxPQUZFO0FBR1RFLGdCQUFRLE9BSEM7QUFJVEosZUFBTTtBQUpHLEtBaEJGOztBQXVCWFQsYUFBUztBQUNMTyxjQUFNO0FBREQ7QUF2QkUsQ0FBZiIsImZpbGUiOiJhY2NvdW50LmpzIiwic291cmNlUm9vdCI6IkQ6L2Rldi9SZWFjdE5leHRKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBwb3N0cyBmcm9tICcuLi9kYXRhL3Bvc3RzJztcclxuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICduZXh0L2Nzcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHVybDogeyBxdWVyeTogeyBpZCB9IH0gfSkgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IF8uZmluZChwb3N0cywgeyBpZDogaWQgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLm1haW4pfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5oZWFkZXIpfT5cclxuICAgICAgICAgICAgICAgIDxoMz4gTkVYVEhST05FIC0gVEhFIFJFVkVMQVRJT04gT0YgR0FNRSBPRiBUSFJPTkVTJyBDSEFSQUNURVJTIDwvaDM+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5wYW5lbCl9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLmhlYWRpbmcpfT5cclxuICAgICAgICAgICAgICAgICAgICBDaGFyYWN0ZXI6e2l0ZW0uY29kZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhbCBOYW1lOntpdGVtLnJlYWxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyaWVmIERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLnN0b3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnNpbmdsZVBob3RvKX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5kaXNwbGF5X3NyY30gYWx0PXtpdGVtLnJlYWxOYW1lfSB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gLz4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG1haW46IHtcclxuICAgICAgICBwYWRkaW5nOic1MHB4J1xyXG4gICAgfSxcclxuXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgICBmb250OiAnMTVweCBNb25hY28nLFxyXG4gICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgfSxcclxuXHJcbiAgICBwYW5lbDoge1xyXG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMTQwcHgnLFxyXG4gICAgICAgIHdpZHRoOiczMDBweCdcclxuICAgIH0sXHJcblxyXG4gICAgc2luZ2xlUGhvdG86IHtcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzk5OScsXHJcbiAgICAgICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgICAgIGZsb2F0OidsZWZ0J1xyXG4gICAgfSxcclxuXHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgICAgZm9udDogJzE1cHggTW9uYWNvJ1xyXG4gICAgfVxyXG59Il19