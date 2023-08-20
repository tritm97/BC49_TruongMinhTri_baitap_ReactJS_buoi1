import React, { Component } from 'react'

export default class BannerComponent extends Component {
  render() {
    return (
        <section class="pt-4">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-start">
                    <div class="m-4 m-lg-5">
                        <h1 class="display-5">A Warm Welcome!</h1>
                        <p class="fs-5">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
