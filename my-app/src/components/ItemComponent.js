import React, { Component } from 'react'

export default class ItemComponent extends Component {
  render() {
    return (
        <div class="col-lg-6 col-xxl-3 mb-5">
            <div class="item">
                <div class="number py-5 px-5">
                    <span class="fs-3">500 x 325</span>
                </div>
                <div class="content">
                    <div class="title text-center py-3">
                        <h4>Card title</h4>
                    </div>
                    <div class="subtitle px-4 pb-3 text-center">
                        <h6>With Bootstrap 5, we've created a fresh new layout for this template! As always, Start Bootstrap has a powerful collectin of free templates.</h6>
                    </div>
                </div>
                <div class="button text-center py-3">
                    <button class="btn btn-primary">Find Out More!</button>
                </div>
            </div>
        </div>
    )
  }
}
