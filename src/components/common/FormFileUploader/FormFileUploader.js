import React, { Component } from 'react';
import upload_icon from 'assets/images/b_nb_upload_icon_64x64.png'
import 'components/styles/Form.scss'
//Set text props for this component
class FormFileUploader extends Component {

    //onDelete, tag: dmID, id, name/content
    constructor(props) {
        super(props);
    }

    onFileChange = () => {
        var name = document.getElementById('form-file-input-' + this.props.id);
        document.querySelector('.form-tip-label.file-info').innerText = `Tên file: ${name.files.item(0).name}\n Kích thước:  ${Math.round(name.files.item(0).size / 1048576 * 100) / 100 + "MB"}, loại file:  ${name.files.item(0).type} `
        //max file, size, type
        if (this.props.onFileChange) {
            this.props.onFileChange(document.getElementById('form-file-input-' + this.props.id).files.item(0))
        }
    }

    handleOverMaxSize = () => {
        //xu ly sau
    }

    render() {
        return (
            <div>
                <div className="form-file-input-wrapper">
                    <label for={'form-file-input-' + this.props.id}>
                        <div className="c-pointer">
                            <div className="d-flex">
                                <img alt="...loading..." className='form-file-input-image' src={upload_icon} />
                            </div>
                            <div className="form-tip-label t-a-center">Định dạng {this.props.fileType} <br></br>Dung lượng không quá {Math.round(this.props.maxSize / 1048576 * 100) / 100 + "MB"}</div>
                        </div>
                    </label>
                    <input type="file" multiple={false} className="form-file-input" accept={this.props.fileType} id={'form-file-input-' + this.props.id} onChange={() => this.onFileChange()} />
                </div>
                <div className='form-tip-label file-info'></div>
                <div className="form-line mg-top-5px" />
            </div>
        )
    }

}

export default FormFileUploader;
