import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export class Path extends React.PureComponent {
  render() {
    const {
      x, y, className, pointComponent, pointStyle, coordinates, path, themeColor, ...restProps
    } = this.props;
    return (
      <path
        stroke={themeColor}
        transform={`translate(${x} ${y})`}
        className={classNames('dx-c-bs4-fill-none dx-c-bs4-series-path', className)}
        d={path(coordinates)}
        {...restProps}
      />
    );
  }
}

Path.propTypes = {
  className: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  coordinates: PropTypes.array.isRequired,
  path: PropTypes.func.isRequired,
  pointComponent: PropTypes.any,
  pointStyle: PropTypes.any,
  themeColor: PropTypes.string,
};

Path.defaultProps = {
  className: undefined,
  pointComponent: undefined,
  pointStyle: undefined,
  themeColor: undefined,
};
