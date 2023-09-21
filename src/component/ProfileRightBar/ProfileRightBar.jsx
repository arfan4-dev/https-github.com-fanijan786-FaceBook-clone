import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profileRightBar.scss";
import {AuthContext} from '../Context/AuthContext'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
const ProfileRightBar = () => {
  const {currentUser}=useContext(AuthContext)
  const [getUserInfo, setGetUserInfo] = useState({});

  useEffect(() => {
    const getInfo = () => {
      const unSub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
        setGetUserInfo(doc.data());
      });
      return () => {
        unSub();
      };
    };
    currentUser.uid && getInfo();
  }, [currentUser.uid]);

  console.log(getUserInfo);

  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle"> User Information</span>
        <Link to={`/profile/${currentUser.displayName}/edit`} style={{ textDecoration: "none" }}>
          <span className="editButton">Edit Profile</span>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Email: </span>
          {getUserInfo.email ? getUserInfo.email : currentUser.email}
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarInfoKey">Phone Number: </span>
          <span className="profileRightBarInfoValue">{getUserInfo.phone}</span>
        </div>
        <div className="profileRightBarInfoItem">
        <span className="profileRightBarInfoKey">Age: </span>
          <span className="profileRightBarInfoValue">{getUserInfo.age}</span>

        </div>
        <div className="profileRightBarInfoItem">
        <span className="profileRightBarInfoKey">Country: </span>
          <span className="profileRightBarInfoValue">
            {getUserInfo.country}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
        <span className="profileRightBarInfoKey">Relationship: </span>
          <span className="profileRightBarInfoValue">
            {getUserInfo.relationship}
          </span>
        </div>
      </div>

      <h4 className="profileRightBarTitle">Close Friends</h4>
      <div className="profileRightBarFollowings">
        <div className="profileRightBarFollowing">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1VU4pTlCWP8npPl0iNEtY92p5PP-SNgqjGg&usqp=CAU"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Hamna Mazher</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVEhUYGBgYGBoYGRgaGBgYGBoYGBgaGRgYGBgcIS4lHCErHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQrISs0NDQ0NDQ0NDQxNDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBBAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xABAEAACAQICBwUFBgUEAgMBAAABAgADEQQhBRIxQVFhcQYigZGhEzJyscEzQlKy0fAHFGKCkqLC4fEj0kNEZBX/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACARAQEBAQACAwEBAQEAAAAAAAABAhEhMQMSQVEiYTL/2gAMAwEAAhEDEQA/AOrQhCUQhCVuldKLSU59768OZit4JO+EnGYxUGZzmL03pmwNz9T+9vrGdJ6WIUsxzN8t5PAfKZetiCSXqLrNuUC4Xqf34Tn1u68R0YxM+a9qPUrE2yXeScv7j9B6RuocOnv1QxG4Z26AHuyO1OrV23C7gSEQeH/F56uhUFvaVUB4KwNuV2Av6SPH7Wnn8eLpWgD3b/Fv+sWdI02sNZ1O5gAM+OtkPQyQnZ6kRf2hAO/UI8mJ1TEns8DlTqI54MHVv8Q4j7C5pFepWUXR1rKd17EjlY7eVyOURhtMKLoyspG1GADqOIy1W42sNkax+h6qbFAO0hWcE87HO/QytUO1kqAtbYW95eh/fSVJKi9Wb4rVJNJ7E52sdRudjsJtvz5mePpl3XUqKOGfyv8AXb9WcNgCxtnLmh2dd9inkYW5hzNqkHetr3YDIX2kbgT6eAkmnpDUACm29rZeHn85pcP2XdgVYW3jL98JXY3shUGaZ8R++sPtP0fS/ikGOYte4A3sRcjeQvpcyxw2kKJNiGY5C7bfMmV+P7O11BLAypbAOpuQfC4+sP8AOhzWW/w1cfdvbg2Y6AjZLzR2OZGBzCjhuHQ7R09JzTA1XX8XXf0v+s0ujNMg2Vz9Ol77PlJ5c+YfjU5XXMHiQ6Bh4yRMPoXSXs2Gd0OXTly+h6zaq4IBGw5zfOvtGGs3NKWKESsVKiBCEIwIQhACEIQAhCEYZ/tB9oPgH5mhDtB9oPgH5mhEGghCUnaTTiYZDn3yMhw5wt4JOjT2mlpAoh79tu5esxAxRe9Sox1B7oN7k594nxNvGVmIxL13trG7nfuXeTxNs8/oY1pTGAWRNi5DPafruJ8Jz61dOnOZCNJaSJNkyOwbwvQbz6D5wVsnfq3dtyncOJvkOkKKapy7zt8voL+flFOaaHWqAO99pvZeg4yP+Rpz9pBrVaxzbUXYLLu4XLDLpHk0Ah94B+NnA9FBtIzdpF91db4boR6qxnv/APVds7upPAufKyg+kr66R9okJohaRLU0dDbatVQfG4uekVV0gtgKisbbCVvbysQeYkCvph9iu/TWv56y/ORlL1TYgnrb0AAhy/pd/iW+Kdskqvq/hJLAdNYGPYTRzufdvzl5oHssWs1TMcJusDolEtlFb/Gkzz2z2gtAaoGsL/Ka6jgFAGQkqnTA2R60XBdfxHWiBBqQ4SRPDDhdQK+EVtolFj+zlN793PiJqSI06xcOacl072ZfD9+ncrvtuHOUlCqr902B4G/7H72zt1egGUgicz7X9kypNSiLWztylS/lKzvmIujdImmQtQ93ffhxPEc92+dK7MaQ11KXvYXXp9Jw6lpBl7lQXHO+X1HWa3szps0nGZtkRfbbhzlSfW9Z3/U47Ok9kfBYhXRXU3DC8kTeOeiEIRgQhCAEIQgBCEIBn+0H2g+AfmaEO0H2g+AfmaEAsdMaSTD0y7HkBfaeH16TkGktIPiapdzlfwHAD98JM7YadbEVWVTZFyHJNuz8TZH/ABlZgMOXUkfi1eQ5c9xvymO9ddGMJNI6iM+97gHeF2u3IWtbqZWFvvtkOfTJZMxlQM1gbIgCjnbP1Nz0ErkbXYsR3UyUcWOwelz0mTXhVfFagvc6zbdxtuAG76bJUVQ9XbkvkIvTNOoo1zexOZ+XQSsp45xnfV6DM7sieu2aZz47GWteeVdYXCINi6xHAZX57b+kdrVVW+uVTiAwLZcly8yZRHFO21j5k+pjuGTWMfC71b4Vi5tTWw4/e/4m67MaAAAd85V9l9EgkEjnn5TouGphQAJlrXbxvnP1nT+GohRkJMVY1TjymEKlARUTee3lJemeGF54Yg8MQRFQIiM2yyLicOHBBky0QyxG452z0N7GprqO6T4X6TM03dDrISy3vbPI8Z27tLohcTRZCO9a6nnwnGQSjslQWKkgjYQRummb2M9Tz10r+G/aUOf5dztzTrbMdN/nOkT50wdd6VRa1E3KENq78jfZ4H1n0Fo/FrVpJUTY6hh4ia4v4y+SfqSIQhLZgQgJ7APIT2eQAhCEAz/aD7QfAPzNCHaD7QfAPzNCIOI4vE21rZm+38TE7uQvNDhqfsaHeJBtn1I7xHQX8SJntFUPaVRf3EIJ522DxN/KW+m6veROWs3Tbb0/0Tn1/HXn11AxNckBVHebJRwufnkPKbPs92ZuilhkNnEneTMxoPCl31233tyE61oQWQLwmer54vnM9UWkezSOuqUFrWnH+0eg6mGqMri6tcow3gHZ1An0gacpO0fZ6niqZRxntBG0NuIl4tyx1ft7fOSPNBoRNdhlv84zpvs8+GqlHFrZjgy8QeEkaHQ3A2AHcZrqznYWZeuu6CwihMtw2y8QSl7Ov/4wOUvFnPHRTimOK0ZEcWMjgMWI2scEaa9ns8nsCeWhaF41VqhRcmwEDOG0hVtIIuQz6Snx+lmc6lMHfs3/AKT3CUlQXqEE+g/WHT+qzTFK+zLrOZ/xH0PqVlrqLK4s1tzrv8rToyVUb3bdRIvaDRQxOHan94d5D/UNnnsjzeUtZcp0JoapXDvTKgpYAE2BYEG1918h4zp/8NMfr0Hotk1J9mw6rjWFxuzvOf8AZ52pmrSbLWUEZ7GpuGA+c2fZ1hR0iyjJcQjjlroRVXx1HPlKzrmuDeZfi66AJ7CE6HG8nsIQAnk9hAPIQhAM/wBoPtB8A/M0IdoPtB8A/M0Ig5TojCagVbZt3j1NsvUDxMq9J4jXqtbYXKj4EOZ8bX8TL7CPlUqbAoa39o/9iT4TM6MTXe52DIX47T4zn/tdvPUb7s3hRqqRmNxmywg1Lc5jtCa1G180O3+nn0m2o2Zcph+tNelijXjiyDhqljYyYjTXNc+oqO0nZ6li6ZSouYzRx76NuZT9N85FV0bUwdf2VfM37jbFcX94X38Ru+feRKXtJoCniqeo+TKdZHHvI42MP03yqMXz5U/Zxu5nt322CXqmUHZ3CvSVkqCzqbHgeDDkZfKZDanRFrGgYsQI8sXeRXxCrtIEjtpWmDbWEC4staF5ApY9G2GSke8Oj6llpndKu7tqLNARK6soDGKqz4VAsndU5j3mO7gBKrEaZVWCpSeqTsztrHgt/e2E5SXpgEgqli1wzr97VJyAG87/AAETh9Hu3v2uGUp3dX2YFti3JLd25JtLzJ+lrWvWYq10+61QjYWpTJsALNmbjabW1enDnlusBVZxcrqjdci555bP3sleMMz1A7522ZbOnCXlNLRXnfBXsnmsdp/QFq3tKdgrtrHk9iCL8CCT1nmlUNP2WIz1qT0ah6BvYv5o6+U2deiHUqd/z3SqxeCFRGQ5B0dD1Yao8QbHwjk/1B9v82NMrAgEbDnPZW9nK5fDUXO3UUHqBYg+Usp0y9cVnLwQhCMCEIQDyE9nkAz/AGg+0HwD8zQh2g+0HwD8zQgHL8YPZ4VuOr87D/cfKN6NwqDDouRv3iQb95syfDZ4Q7QuRQPAkAdNZrD/AE+szuG0k1HUW2shUkjYQSSbg9N3Kcv1tnh2zUzfLoWgsaAfZVd/utx5HnNTgb021fut7vLlOcaN0glQWBv6MDz4GbXQ+O1l1Khv+Fv15zGzla+54aV1zvJNM3Eh0H1lz2j93juHqZ2lSstROQxZiUEUZpGSs0nRy11HeX1G9ZEpVgQCN8sMacpltE4q+uv4XYDpe49DM7eV0Y85XlbFKilmNgJQ4jTlRvs0NtxAv6R/EA1XsTZF9TEYrHU6IAAzOQA94nlHKriCcLXqG7MV6/pFJoZRkznpcfKQKmnSz6hJ5qhsByZ9pa25RLDAUnZ9T2Sk2ve42japNj3tuRtH9bUXeZ+p9HD+zGV5ZYDFa2UpVrnW1FSpe9jsKjq17WljhqGqb75FnF/nloEF5DxOHuZKwr3EdqJL52Mu8qko6MRLlVzY3ZibsSeJPykhMJJ4WLCwkF1UelRAj6rFBYoyuJ70gyFXGrmON/qflJrSuxz95E/EW9B/zHn2WvVK7LnVSrT/AAVqgHR211Hk0vJQ6GsuJxKj7xpvbqir/tMvpvn05te3kIQlEIQhACeT2eQCg7QfaD4B+ZoTztB9oPgH5mhAOQ6ff/xgZ7bf4LYehBlVpTD2NKx2ooJN8u6gI8OUnaWfXC8/aG3ggH75RONXXw6VMv8A4yOXcNwOGYbyEwy6NKJHem+shsRkfA7DNn2f06r8nHvKfp+syOMQgm9wTnntzz+t5C9oyMHQ2I/efIw1maVnVy79o3FhrG+0fvxl5h6Nzecn7G9pA7KjGxJGROw7LjiJ2LDjKYzNl5V61LOw7qxBi2jbmWyVmkW7rdDMNo2tZ6g4Ow8jb6TcY3NTznNtH1tXEVl4Vqn5zM9Trp+KtMXIGUyGn8Q4Y+zuW2FgL2B3KeM2dBA1pJfBKwsRFnXKvU7OMfovRy6iFLBwCH1wTrFsye7vmqwOFRAAuViSLXA1m942uSb3O0nbFJoy2w2EsMNgwsv72srjM8inTJ3WEkrTtJCU5665RWF9u0nCvY2k+VKPYyxpPcR5pannpLi09R4t1ykZ13iO+CnlJBgTI61OMdDwlOx60iVKesyn8Jv6GSXaNKZWb5Tqf5QcK1sewH38PTJ/taoP0mimfoC+MRv/AM5v4OlvzNL+bxy6EIQlEIQhACeT2EAz/aD7QfAPzNCHaD7QfAPzNCAcWxubJb8VQf6UP6x3QVnp16RzKrroOQezi3R2Mi1H1ipH43I8ApH1j+saL+1UXAurj8VOqCM/O3gswjpquxKHVBO0HUP9oGqSemXgZWOl7jymh0ph9RnC+6wV15gbD5E+co6i5+MY4XoBD/M0LbTWpjzdRPpulsnAewOB9pj6ItkpLnK/uC/zInf0EjV7RJyFNGqpyjhkfFPYHpFRFXinynJcNXPtnfOzu7eDMWHzm+7VY/2OHY/eeyDxGfpec90a4qaw+8M7cZMnhtlv9FVrgS+pKDMNojFWsDtE2OCr3EjnlpfPlYJTkhEjKPHlaVOMtdO2jdQZRQaesMpVKeFVbvHlH0xgU2nmJpkZrM/jcO71EZXdVUG6C6gk7zxkTw0mZpqTiwcpFwVV2vrqFGsdWxvdb5E9RGKVMix2yfSOUftNkkSCoMbZLbJ7rxD11G1gPGOxM691p4s8pm+zZFWhBUDCKf5832fy5t/ml/Vj5TRyiwqH+b1t3sNXx1729Jezpz6cm/YhCEtIhCEAIQhAM/2g+0HwD8zQh2g+0HwD8zQgHGNE09apQXb3gCOTEg+hHpLTH4QIzITcElNbfqPmhPMG2XPdKvRNFnq0VRtQs9gxvZc8jL3Sujayd1n1tckAkHVJzXab7LTB01n31giiptpsyG/4QbFb8vrylRXTO3X0lviS1yHGbbfiXuk+kgams2WZLW597/uBuh/wl0b9piGG4Iv5mPqvrOoDZKTsno3+Xw1OmfeCgt8RzPrLyZ+/IryQNIN3ZPaVOk32CFE9uU/xF02VxFOkM1RdZxxZz8woB/ujGi6VKoNZW1STrKU47+nQzK6exv8AMYitV3M5K/AO6n+lVkHDYp6bayMVPoeo2Ga/TsLPy3N/46VWI1hqkF7d62V+dt0u9FY/cdonP8H2wIQpVphjcEMuViDfJTsO3fvOUl6J7RirWKldW/um+0jaD4fKZX49Nc/Lmur4fFXEmpVmPweMIteXWGxYO+R1rYvkeL1pWU68krWj6i5PuYwyCeNVkarjBsXPif0jGZb6SSwGUStUDJTKxsUTcU0Lt5eZizhqr2uRTXeBm2Y47t8caTH9SmxNzZAWPLYOpg2G1iNcDI3ttz5x+jTVFsgjtFc7x3/pask8HUFhAxVp40liKK2qI3VfME/SWczKdosLrtSNZFqU27ytdcxnZWOTZZZHjLF+0uDX3sTRHLXW/ledWZ/mOTV7qrWEom7XYEf/AGFPQOfULPafa3BMbCuP8XH+2UleQkfDY2nU+zdW6EX8tskQAhCEAz/aD7QfAPzNCHaD7QfAPzNCAcf0K2riKAO50Pqt/mZ0TTWGD0VNs9oPDvhjv/onMcHW1ayP+Fg3+LLYek6g9Go9NCTqowyUG7ZknNrZbd3DbMY6KxOmKSrrZj37gZX76JU1jvGbOPCN9idEmrjcxdEC1D1+4PO/kZbVtHqfaqFF1QMGO2664G/km2bPslosUqStq6rOqltl8lyGXMk+MjXZFZsaGmsdiUE9YxQqQ5mP7c6Q9jhqzg2OoVU/1P3FPgWB8JrahnLf4uYu1NKYObvrEf0ov/s6wk7YPUrlwGQEQ6xVPZHGX9/vxmzIxq+sUFKkEGxBBBG4jMRSrlaOr3lvH03QtAaQFamrfeGTDgw2zQUBwnLNAaR/l6lye49g3Lg3hvnUMHUBAInNvPK6/j19osqNUjIyfRe8r0Ij6HhIXXukUqMpFMhb7TYnLoJWYbCMuTuSOAut+p2y717zwpfdHKM3jzDYkKNVRYchuGUlLib8TGEoDhJtClKmqNbn8eU0LbfKTFS0UigRUbLWukkSq7QaSXDUHrNmEUkDezbFUdSQPGWjtac8/ijim9nSUe4ztrc2C90fmPhHmdvEavM2uUfz7M7M57zMWY/1MSzepMsaOkCbBrMOf0O0SrxtHO4jFKrbIzrcrSJUQ5qWHLb5GWWCqopuxY8gLet5mKNWTqWIgTZYfSuqwNO622WOfnNTgO2jpb2y66H7wsHFtoO5vSc5w9ZGW+sARuJt5XkulpFFFma44DOMuO1aM0tRxC61F1fiNjL8SnMSXUqKoLOwVRtJIAHUmfPyY4I+vSZ1INwQdQjxXOP6R7S4nEACrVZlGxdg6kbzzOcXB5dE7Q9pML7QWqg2QC4ViPebfaE5HXrm4zOyEOGUim+qNtz/AM/WdD0b2qojDKjB9dFsFZCAxAsAD9TwmAwq2NrZlib8rESZcgyMZl8tPk1ZeLPRWOc19eu5SmTd9Vda4BJ1QACdu+dR0ZpvDVbLTrITuU3RvBWsTOPk5TwrDXxS/pT5a70IhjOR6I7WYjDWGvroPuOScv6W2r8uU6JoTtBRxS3pmzgd5GydefMcxMdYuWmdzSwrHKcU/ilX18Sq39ymD4uxJ9As7TW2GcD7ZVtfGVnvcByngiqhH+kmGfZ69M4h2+cfIy6f9xkrY28P0Mfpma1ENrtisO1jYw1dkac2YGI0iomZG4y+7Ldo/ZkUqp7uxWO7grfrKt01lDDeJXYpLEc/rJ5NeKqW5vY7Th8SGFwZLSpMB2Z0jroAW7y5H9ZpUrON95z6nLx1ZvZ1oUqyTTqTLjSeqe9JNHSo4wPjUI4j6PM/R0kp3yQuO4QlK5X4qCIfFASoXFMd3nPVN9sfUfVMeuW6TI/xFpa2DLAZo6OPFtQ+jmakGVHaTD+0w9VN7U3A66pt62jzeWVOp2WOM4gXF5W1ElijXURiok7XEjUalsjJ1N7yvdI5Rq2yiNZKY4DI9N5IRoyOKYoGJWLtGDVZc57E1tvhCILbDoL33jb4/wDIMeK5iIRkTNmAJ4kCAct7oy/Ech4DaflzhicyN3uqWzgRK1lb3SDbbY3jOIpgZN3jvvsHIDdI3sh04EZEeIj6XE9hee06rIwemxR1NwwNiDIqlxsYNyYWP+Q/SDYq2Tow5izD539IE6JoTtqrrqYqyPbJxkjnn+E+nTZOT6QbXd33uzP0bWJPzPpLFLubkWA2A7+ZntfBa12Swb8O4nlMrjnmNs674rPPmAeGR+h+ngItDnComqzKQRusfqNxtPLbOX/cRnCPQj/uNYhcr8Pls9D85ITblvHyjT8Ds39GyMSkzRjXQrvBkTH08geB/WOaOurkGSsWgJsd/wCzF60fO5RdF4oo4Yf3DiJ0jR9cOgYG4InL6SlSeK5EcQN4mm7OaS1GCk9xvQyfkz3yv4tc8Vq8TQkdKdtkstokNxYzB0n8Ne8u8OsqMI4l1RaTSqQgi7xrXilN44mn0MiY1sj0MklrCVGk69kc8FPylIccp7LTwwTbFETvjiqLUSR2WTagkdhAPaNTcZMR5XAWkqk8AsEMekSm0ko0ZCr9IRNbbCILBEF3NhfX22z85Yjb4TyEM/8AmHr3UBtsSsIRoCx1YQgoPti194dD9IQglV9oxmh3kC53nMb5Wp7o6H5tCEy17bZ9FYf7vWeVdo6GEJP6v8Kp++v74SbX94fDCEmqnpX4j3x0ElUfeMISr6Ke3RtGfZr0HyiMb709hOW+3Vn0MLtl1h9kIRVR+SacIRxFe1dkoNL/AGL9DCEaY5ONviY5CE7o4b7NPI7QhGRDRawhA0tJJpwhAjjbukIQjD//2Q=="
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Ishbal Naseer</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-6/352817397_1764697613968539_1191538272991646729_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeE2hZwMHJc5CttpoWMwGpHJZ6sAk_PBj0JnqwCT88GPQkomf-TFN1XDkIUTltDFxGKRDc182YnkeKkzQeQEHXHt&_nc_ohc=hZ-5IG2fBwUAX9vxfA5&_nc_ht=scontent.flyp3-1.fna&oh=00_AfDaiphr3VyAPRl1Fkavm1JJRSIR2EoegL0z7qWCS31dUw&oe=65095F59"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Muhammad Arfan</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-1/264109097_1051736972066197_6331762315283856852_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=6e0f69&_nc_eui2=AeHlq_XS1YwuFalN8c0J2G3RUvbBXDai-PNS9sFcNqL484_YDIYGEJR21PowSSR_aO5kjY8R9AaH2jlBZU975FAJ&_nc_ohc=5G-UiEZxWn8AX8nlt6q&_nc_ht=scontent.flyp3-1.fna&oh=00_AfAIqzDz3mAMTY3HSjnHzndRKFdRQ8hfO9OojS_SQPJs0A&oe=6509F636"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Arshan Nawaz</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-6/378692447_675312781197364_8831268053115277029_n.jpg?stp=dst-jpg_s640x640&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHTcmoqQnxJi8scrKmkgo4wzy-Z26E_OazPL5nboT85rJw0DDRAWoUZEP-ctnQbdA073Douj1zU6k_sa2sYwbvd&_nc_ohc=AyQ_IvKeJRkAX8QK7W7&_nc_ht=scontent.flyp3-1.fna&oh=00_AfDpyMliFyPPIfgn1ueEQL91a0LIPHdiDrrCD8cz7w_XqA&oe=6508EFB5"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Ameer Hamza</span>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <span className="profileRightBarFollowingName">Mark Zuker</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightBar;