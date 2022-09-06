import React from "react";
import "./Header.css"



export class Header extends React.Component {
  render() {
    let categories = [{ name: 'Home' }, { name: 'Stocks And Investing' }, { name: 'About' }]
    return (
      <div className="">
        <div className="banner-img d-flex align-items-center justify-content-end">
          <img src="https://i0.wp.com/moneywithcaleb.com/wp-content/uploads/2021/11/logo-2.png?w=493&ssl=1" className="logo-img"></img>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex p-1">
                {categories.map((c) => {
                  return (
                    <div>
                      <p className="category-text pe-4">{c.name}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}