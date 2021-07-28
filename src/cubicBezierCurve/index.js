import React from "react";
import './index.css'

class Cubic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { xIndex: 200, yIndex: 200 };
    }


    _onMouseMove(e) {
        this.setState({ xIndex: e.nativeEvent.offsetX, yIndex: e.nativeEvent.offsetY });
    }



    render() {
        const { xIndex, yIndex } = this.state;
        const startPoint = [0, 0];
        const controlPoint1 = [(2*xIndex)/3, 0];
        const controlPoint2 = [xIndex/3,yIndex]
        const endPoint = [xIndex, yIndex];
        const path = (
            <path
                d={`
            M ${startPoint}
            C ${controlPoint1} ${controlPoint2} ${endPoint}
            `}
              fill="none"
              stroke="white"
              strokeWidth={5}
            />
          )

        return <div className="container" onClick={this._onMouseMove.bind(this)}>

            <svg
                style={{
                    background: '#000',
                    width: '100%',
                    height: '80%'
                }}

            >
                {path}

            </svg>
        </div>;
    }

}

export default Cubic;
