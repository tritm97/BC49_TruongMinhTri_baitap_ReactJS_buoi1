import React, { Component } from 'react'
import BannerComponent from './BannerComponent'
import ItemComponent from './ItemComponent'

export default class BodyComponent extends Component {
  render() {
    return (
      <div>
        <BannerComponent />
        <section class="pt-4">
          <div class="container px-lg-5">
            <div class="row gx-lg-5">
              <ItemComponent />
              <ItemComponent />
              <ItemComponent />
              <ItemComponent />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
