import React, { Component } from 'react'

import 'components/styles/DocPostSummary.scss'
import 'components/styles/SimpleButton.scss'
import CustomModal from 'components/common/CustomModalPopup/CustomModal'
import gray_btn_element from 'assets/images/g_btn_element.png'

class RequestedPostSummary extends Component {

    constructor(props) {
        super(props);

        this.id = this.props.id;
        this.authorName = this.props.authorName;
        this.authorID = this.props.authorID;
        this.requestedDate = this.props.requestedDate;
        this.requestedTime = this.props.requestedTime;
        this.requestedCategory = this.props.requestedCategory;
        this.requestedCategoryID = this.props.requestedCategoryID;
        this.semester = this.props.semester;
        this.year = this.props.year;
        this.subject = this.props.subject;
        this.title = this.props.title;
        this.content = this.props.content;
        this.image = this.props.image;
        this.tags = this.props.tags;
        this.viewCount = this.props.viewCount;
        this.downCount = this.props.downCount;

        this.isRejectRequestedPopupOpen = false;

        this.state = {
            // isRejectRequestedPopupOpen: false,
        }
    }


    componentDidMount() {

    }

    getFirstImage() {

    }

    render() {

        return (

            <div className="item-container" >
                <div className="item-main-layout">
                    <div className="item-normal-metadata-container">
                        <div className="author-linkauthor-link" onClick={() => this.navigateToAuthorPersonalPage()}>
                            {this.authorName}
                        </div>
                        <div className="requested-date">
                            {this.requestedDate}
                        </div>
                    </div>

                    <div className="item-request-metadata-container">
                        vào lúc {this.requestedTime} đã yêu cầu phê duyệt một tài liệu trong danh mục
                    <div className="requested-category" onClick={() => this.navigateToSameCategoryDocsPage()}>
                            {this.requestedCategory}
                        </div>
                    </div>

                    <div className="item-title">
                        {this.props.title}
                    </div>

                    <div className="item-summary">
                        {this.props.content}
                    </div>

                    <div className="author-image-link-layout">
                        <img alt="post" className="author-image-link" src={this.props.image}></img>
                    </div>

                </div>
                <div className="item-container_Footer">
                    <div className="blue-button" style={{ marginRight: "5px", fontSize: "16px" }} onClick={() => this.handlerPreviewRequestedPost()}>Xem trước</div>
                    <div className="red-button" style={{ fontSize: "16px" }} onClick={() => { this.handlerRejectRequestedPost() }}>Từ chối</div>
                </div>

                {/* Popup for reject requested post */}
                <CustomModal
                    shadow={true}
                    type="confirmation"
                    open={this.isRejectRequestedPopupOpen}
                    title="Xác nhận?"
                    text="Xác nhận từ chối tiếp nhận bài viết này?"
                    closeModal={() => { this.isRejectRequestedPopupOpen = false; this.setState({}); }}
                >
                    <button className="blue-button mg-right-5px" onClick={() => this.handlerVerifyRejectRequestedPostConfirmation()}>OK</button>
                    <button className="white-button" onClick={() => this.handleCancelRejectRequestedPostConfirmation()}>Cancel</button>

                </CustomModal>


            </div>
        );
    }

    navigateToAuthorPersonalPage = () => {
        if (window.location.pathname.substring(0, 6) === "/admin") {
            window.location.href = "/admin/user/" + this.authorID;
            return;
        }
        if (window.location.pathname.substring(0, 5) === "/user")
            window.location.href = "/user/" + this.authorID;
    }

    navigateToSameCategoryDocsPage = () => {
        window.location.href = "/docs/category?id=" + this.requestedCategoryID;
    }

    handlerPreviewRequestedPost = () => {
        if (window.location.pathname.substring(0, 6) === "/admin") {
            window.location.href = "/admin/doc-approving/" + this.id;
            return;
        }
        if (window.location.pathname.substring(0, 5) === "/user")
            window.location.href = "/user/doc-approving/" + this.id;

    }

    handlerRejectRequestedPost = () => {
        this.isRejectRequestedPopupOpen = true;
        this.setState({});
    }

    handleCancelRejectRequestedPostConfirmation = () => {
        this.isRejectRequestedPopupOpen = false;
        this.setState({});
    }

    handlerVerifyRejectRequestedPostConfirmation = () => {
        this.isRejectRequestedPopupOpen = false;
        this.setState({});
    }



}
export default RequestedPostSummary;