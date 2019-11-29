import React from 'react';

export const Loader = () => {
  return (
    <div className="page-loading-warp">
        <div className="ant-spin ant-spin-lg ant-spin-spinning">
          <span className="ant-spin-dot ant-spin-dot-spin">
            <i className="ant-spin-dot-item"></i><i className="ant-spin-dot-item"></i>
            <i className="ant-spin-dot-item"></i><i className="ant-spin-dot-item"></i>
          </span>
        </div>
      </div>
  );
}