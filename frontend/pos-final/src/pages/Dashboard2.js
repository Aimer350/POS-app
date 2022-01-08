import React from 'react'
import './Dashboard2.css'
import Cookies from 'js-cookie'
class Dashboard2 extends React.Component{

    pageHome(){
        console.log("login")
        window.location.href = "/"
    }

    display(){
        if(Cookies.get('jwt')){
          return
        }else{
          return this.pageHome()

        }
      }

    render(){
        return(
            <>
            {this.display()}
                <div id="maindivtop">
               
                
                <div id="toptitleds2">Transactions
                <div id="topdivider"></div>


                <form action="/add-transaction" >
                    <input type="submit" value="Add Transaction" id="addTransButton"/>
                </form>

                <form action="/view-transactions" >
                    <input type="submit" value="View Transaction" id="viewTransButton"/>
                </form>
    
                </div>
                
                

                




            </div>




            <div id="maindivtop2">
            <div id="Divider"></div>
            <div id="mmessage">
                <b>Welcome to Homepage</b>
                </div>
            <div id="text">
                This is Pos-Final, an inventory app made in completion for the CMSC 100 course. This is made by the following students: Adryan Phyllip Ramos, Julian Fuertes, Redeemyrrh Ysrael Manalo, headed by Earl Sam Capuchino.
            </div>
            </div>

            <div id="maindiv2">
            <div id="Divider3"></div>
            <div id="picturebox"><div id="picture1"><div id="title1">
            <p>Ramos, Adryan:</p><p>Back End</p>
            </div></div></div>
            <div id="picturebox1"><div id="picture2"><div id="title2">
            <p>Manalo, Ysrael:</p><p>Front End</p>
            </div></div></div>
            <div id="picturebox2"><div id="picture3"><div id="title3">
            <p>Fuertes, Julian:</p><p>Database</p>
            </div></div></div>
            <div id="picturebox3"><div id="picture4"><div id="title4">
            <p>Capuchino, Earl:</p><p>Team Head</p>
            </div></div></div>
            </div>
            
            <div id="maindiv3">
            <div id="Divider4"></div>
            <div id="mmessage1">
                <b>About Us</b>
                </div>
            <div id="text1">
                We are a team of students from CMSC 100: Web Programming. Currently, we are made of 4 members, 3 of which came from institute of statistics, and the last one came from the institute of computer science, either on sophomore or junior standing.
            </div>
            </div>
            </>
            
        )
    }
}

export default Dashboard2