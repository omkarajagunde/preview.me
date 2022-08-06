import { useEffect, useState } from "react"
import Logo from "../resources/Logo.svg"
import Link from "../resources/Link.svg"
import LinkedInCard from "../components/LinkedInCard"
import TwitterCard from "../components/TwitterCard"
import ArrowIcon from '../resources/ArrowIcon.svg'
import OtherCard from "../components/OtherCard"



export default function Home() {

  const [state, setState] = useState({
    searchFocused: false,
    metadata: null,
    isError: false,
    tabIdx: 0,
    metadataLoading: false,
    tabsArray: ["Linkedin", "Twitter", "Instagram", "Facebook", "other"],
    postsArray: [
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/06/instagram-pin-posts.png?w=1390&crop=1",
        title: "Streaming royalties are broken, Rashida Tlaib thinks Congress can fix them",
        readTime: "2 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Courtesy-of-Brandy-Merriweather-__-via-BStarPR.png?w=1390&crop=1",
        title: "Why an Atlanta-based Black influencer collective swapped their collab house for a studio",
        subtitle: "From Los Angeles to Silicon Valley, a trend emerged among social media influencers and startup founders alike",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/GettyImages-1389471618.jpg?resize=2048,1296",
        title: "Investors prepare for a founder downturn. Or influx. Wait, what?",
        readTime: "6 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Depositphotos_84108998_xl-2015.jpg?w=1390&crop=1",
        title: "Online-only home solar seller bags $23M, pledging ‘dramatically lower prices’",
        subtitle: "Project Solar doesn’t make solar panels, nor does it employ crews to plop them on roofs",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2017/03/img_1004.jpg?w=1390&crop=1",
        title: "Daily Crunch: Amazon to acquire iRobot in $1.7B all-cash deal",
        readTime: "10 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/52264517689_21b97b33bc_o.jpg?w=1390&crop=1",
        title: "SpaceX launches South Korea’s first moon mission, an orbiter named Danuri",
        subtitle: "Last night, the country launched its first-ever lunar mission — in fact, its first-ever mission beyond low Earth orbit",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Courtesy-of-Brandy-Merriweather-__-via-BStarPR.png?w=1390&crop=1",
        title: "Why an Atlanta-based Black influencer collective swapped their collab house for a studio",
        readTime: "20 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/52264517689_21b97b33bc_o.jpg?w=1390&crop=1",
        title: "SpaceX launches South Korea’s first moon mission, an orbiter named Danuri",
        subtitle: "Last night, the country launched its first-ever lunar mission — in fact, its first-ever mission beyond low Earth orbit",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/06/instagram-pin-posts.png?w=1390&crop=1",
        title: "Streaming royalties are broken, Rashida Tlaib thinks Congress can fix them",
        readTime: "2 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Courtesy-of-Brandy-Merriweather-__-via-BStarPR.png?w=1390&crop=1",
        title: "Why an Atlanta-based Black influencer collective swapped their collab house for a studio",
        subtitle: "From Los Angeles to Silicon Valley, a trend emerged among social media influencers and startup founders alike",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/GettyImages-1389471618.jpg?resize=2048,1296",
        title: "Investors prepare for a founder downturn. Or influx. Wait, what?",
        readTime: "6 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Depositphotos_84108998_xl-2015.jpg?w=1390&crop=1",
        title: "Online-only home solar seller bags $23M, pledging ‘dramatically lower prices’",
        subtitle: "Project Solar doesn’t make solar panels, nor does it employ crews to plop them on roofs",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2017/03/img_1004.jpg?w=1390&crop=1",
        title: "Daily Crunch: Amazon to acquire iRobot in $1.7B all-cash deal",
        readTime: "10 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/52264517689_21b97b33bc_o.jpg?w=1390&crop=1",
        title: "SpaceX launches South Korea’s first moon mission, an orbiter named Danuri",
        subtitle: "Last night, the country launched its first-ever lunar mission — in fact, its first-ever mission beyond low Earth orbit",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Courtesy-of-Brandy-Merriweather-__-via-BStarPR.png?w=1390&crop=1",
        title: "Why an Atlanta-based Black influencer collective swapped their collab house for a studio",
        readTime: "20 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/52264517689_21b97b33bc_o.jpg?w=1390&crop=1",
        title: "SpaceX launches South Korea’s first moon mission, an orbiter named Danuri",
        subtitle: "Last night, the country launched its first-ever lunar mission — in fact, its first-ever mission beyond low Earth orbit",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/06/instagram-pin-posts.png?w=1390&crop=1",
        title: "Streaming royalties are broken, Rashida Tlaib thinks Congress can fix them",
        readTime: "2 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Courtesy-of-Brandy-Merriweather-__-via-BStarPR.png?w=1390&crop=1",
        title: "Why an Atlanta-based Black influencer collective swapped their collab house for a studio",
        subtitle: "From Los Angeles to Silicon Valley, a trend emerged among social media influencers and startup founders alike",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/GettyImages-1389471618.jpg?resize=2048,1296",
        title: "Investors prepare for a founder downturn. Or influx. Wait, what?",
        readTime: "6 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Depositphotos_84108998_xl-2015.jpg?w=1390&crop=1",
        title: "Online-only home solar seller bags $23M, pledging ‘dramatically lower prices’",
        subtitle: "Project Solar doesn’t make solar panels, nor does it employ crews to plop them on roofs",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2017/03/img_1004.jpg?w=1390&crop=1",
        title: "Daily Crunch: Amazon to acquire iRobot in $1.7B all-cash deal",
        readTime: "10 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/52264517689_21b97b33bc_o.jpg?w=1390&crop=1",
        title: "SpaceX launches South Korea’s first moon mission, an orbiter named Danuri",
        subtitle: "Last night, the country launched its first-ever lunar mission — in fact, its first-ever mission beyond low Earth orbit",
        webDomain: "techcrunch.com",
        type: "twitter"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/Courtesy-of-Brandy-Merriweather-__-via-BStarPR.png?w=1390&crop=1",
        title: "Why an Atlanta-based Black influencer collective swapped their collab house for a studio",
        readTime: "20 mins read",
        webDomain: "techcrunch.com",
        type: "linkedin"
      },
      {
        imageURL: "https://techcrunch.com/wp-content/uploads/2022/08/52264517689_21b97b33bc_o.jpg?w=1390&crop=1",
        title: "SpaceX launches South Korea’s first moon mission, an orbiter named Danuri",
        subtitle: "Last night, the country launched its first-ever lunar mission — in fact, its first-ever mission beyond low Earth orbit",
        webDomain: "techcrunch.com",
        type: "twitter"
      }
    ],
  })

  const handleIgniteInterval = () => {
    let col1 = document.getElementById("col1")
    let col2 = document.getElementById("col2")
    let col3 = document.getElementById("col3")
    let col1Flag = false, col2Flag = false, col3Flag = false
    let interval = setInterval(() => {
      col1.scrollBy(0, 1)
      col2.scrollBy(0, 5)
      col3.scrollBy(0, 3)

      if (col1.scrollTop >= (col1.scrollHeight - col1.clientHeight)) {
        col1Flag = true
      }

      if (col2.scrollTop >= (col2.scrollHeight - col2.clientHeight)) {
        col2Flag = true
      }

      if (col3.scrollTop >= (col3.scrollHeight - col3.clientHeight)) {
        col3Flag = true
      }

      if (col1Flag && col2Flag && col3Flag) {
        clearInterval(interval)
        console.log("Timer killed...");
      }
    }, 50)
    return interval
  }

  useEffect(() => {
    let interval = handleIgniteInterval()
    // window.addEventListener("scroll", (eve) => {
    //   console.log( window.scrollY);
    //   if ( window.scrollY > 10) {
    //      clearInterval(interval)
    //   }
      
    //   if (window.scrollY <= 10) {
    //     interval = handleIgniteInterval()
    //   }
    // })
  }, [])

  const handleSave = () => {
    let elem = document.getElementById("searchBar")
    let value = elem.value
    if (value.length > 3) {
      setState((prevState) => ({ ...prevState, metadataLoading: true, isError: false, errorMsg: ""  }))
      if (value.includes("https://")) {
        value = value.replace("https://", "")
      }
      fetch('https://jsonlink.io/api/extract?url=https://' + value.trim()).then(function(resp){
        resp.json().then(html => {
          console.log(html);
          if (html.error) {
            setState((prevState) => ({ ...prevState, metadataLoading: false, metadata: null, isError: true, errorMsg: "Entered website not valid or not found" }))
            return
          }
          setState((prevState) => ({ ...prevState, metadataLoading: false, metadata: html }))
        }).catch(err => {
          console.log(err);
        })
      });
    } else {
      setState((prevState) => ({ ...prevState, isError: true, errorMsg: "Please enter correct website" }))
    }
  }

  const handleSearchBarFocus = (eve, flag) => {
    setState((prevState) => ({ ...prevState, searchFocused: flag }))
  }

  const handleTab = (idx) => {
    setState((prevState) => ({ ...prevState, tabIdx: idx }))
  }

  const renderContainerOne = () => {
    return (
      <>
        <div className="main-container">
          <div className="main-overlay"></div>
          <div className="main-left" >
            <div className="main-left--title">
              Check how your <br/>
              link preview looks like in different social platforms
            </div>
            <div className="main-left--subtitle">
              Enter your webpage url and see the magic happen
            </div>
            <div className="main-left--searchBar">
                <div className="main-left--link">
                  <img src={ Link.src } alt="link" />
                </div>
                <input id="searchBar" style={{ width: state.searchFocused? "400px": "350px" }} placeholder="e.g. google.com" onFocus={(eve) => handleSearchBarFocus(eve,true)} onBlur={(eve) => handleSearchBarFocus(eve,false)}/>
                <div className="main-left--searchBtn" onClick={handleSave}>
                  { state.metadataLoading ? "Loading...": "Search" }
                </div>
            </div>
            {
              state.isError && <div className="main-left--error">{ state.errorMsg }</div>
            }
          </div>
          <div className="main-right" style={{ opacity: state.searchFocused? 0.5: 1 }}>
            <div className="main-rightCol1" id="col1">
              {
                state.postsArray.map(post => {
                  if (post.type === "linkedin") {
                    return <LinkedInCard postData={ post } style={{ }}/> 
                  }

                  if (post.type === "twitter") {
                    return <TwitterCard postData={ post } style={{ }}/> 
                  }
                })
              }
            </div>
            <div className="main-rightCol2" id="col2" style={{ transform: "rotateX(180deg)" }}>
              {
                state.postsArray.map(post => {
                  if (post.type === "linkedin") {
                    return <LinkedInCard postData={ post } style={{ transform: "rotateX(-180deg)" }} /> 
                  }

                  if (post.type === "twitter") {
                    return <TwitterCard postData={ post } style={{ transform: "rotateX(-180deg)" }} /> 
                  }
                })
              }
            </div>
            <div className="main-rightCol3" id="col3" style={{ display: state.searchFocused? "none": "block" }}>
              {
                state.postsArray.map(post => {
                  if (post.type === "linkedin") {
                    return <LinkedInCard postData={ post } style={{ }}/> 
                  }

                  if (post.type === "twitter") {
                    return <TwitterCard postData={ post } style={{ }}/> 
                  }
                })
              }
            </div>
          </div>
        </div>

        <div className="main-arrow"><img src={ ArrowIcon.src } /></div>

        {
          state.metadata !== null &&
          <div className="main-view" id="view" onLoad={() => {
              document.getElementById("view").scrollIntoView()
          }}>
            <div className="main-view--title">Previews</div>
            {/* <div className="main-view--tabs">
              {
                state.tabsArray.map((tab, idx) => <div style={{ opacity: state.tabIdx === idx? "1": "0.7" }} onClick={() => handleTab(idx)} className="main-view--tab">{ tab }</div>)
              }
            </div> */}
            <div className="main-view--alltabs">
              <div  className="main-view--card">
                <div className="main-view--cardTitle">Linkedin card</div>
                <LinkedInCard style={{ width: "350px" }} postData={{ title: state.metadata.title, imageURL: state.metadata.images[0], readTime: "3 mins read", webDomain: state.metadata.domain }} />
              </div>

              <div  className="main-view--card">
                <div className="main-view--cardTitle">Twitter card</div>
                <TwitterCard style={{ width: "350px" }} postData={{ title: state.metadata.title, subtitle: state.metadata.description, imageURL: state.metadata.images[0], domain: state.metadata.domain }} />
              </div>
              
              <div  className="main-view--card">
                <div className="main-view--cardTitle">Other social media cards</div>
                <OtherCard style={{ width: "350px" }} postData={{ title: state.metadata.title, subtitle: state.metadata.description, imageURL: state.metadata.images[0], domain: state.metadata.domain }} />
              </div>
            </div>
          </div>
        }


        <div className="main-view">
          <div className="main-view--title">Why beautiful previews are needed?</div>
          {/* <div className="main-view--tabs">
            {
              state.tabsArray.map((tab, idx) => <div style={{ opacity: state.tabIdx === idx? "1": "0.7" }} onClick={() => handleTab(idx)} className="main-view--tab">{ tab }</div>)
            }
          </div> */}
          <div className="main-view--alltabs">
            <div  className="main-view--card">
              <div className="main-view--cardTitle">
                If your website url has preview enabled and the web url is shared on any social media networks, then becuase of previews
                user is more likely to click the url as he/she/they know that the url is not trying to phishing and they also have an idea 
                about what content they will get to see if clicked on the link
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }
  return (
    <div className="main">
      <div className="main-header">
        <img src={ Logo.src } alt="logo" />
      </div>

      { renderContainerOne() }
    </div>
  )
}
