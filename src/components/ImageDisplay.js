import React, { Component } from 'react';


class ImageDisplay extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let { data } = this.props;
        let renderImages = data.map((image) => {
            return (
                <div key={image.id}>
                <img className="img" alt="" src={image.img_src} />
                </div>
            )
        })
        let renderSorry = <div className="brand-title"> Sorry, no images available. </div>
        return (
            <div>
                { renderImages.length > 1 ? renderImages : renderSorry }

            </div>
        );
    }
}

export default ImageDisplay;
