import React, {Component} from 'react'




export class Article extends Component {

  render() {
    let articles = [
      {id: 1, title: "Hello WatchKit", content: "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.", comments: "12 comments", likes: "124 likes"},
      {id: 2, title: "Introduction to Swift", content: "Swift is a modern programming language developed by Apple to create the next generation of IOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started", comments: "15 comments", likes: "45 likes"}
    ]

    return (

      <div id='articles'>
        <ul>
          {articles.map(function(article){
            return <li key={article.id}>
                      <h3>{article.title}</h3>
                      <p>{article.content}</p>
                      <div>{article.comments} {article.likes}</div>
                    </li>
          })}
        </ul>
      </div>
    )
  }
}
