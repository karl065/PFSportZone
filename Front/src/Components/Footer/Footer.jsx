import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footerCO}>
      <div className={style.Fsec1}>
        <h2 className={style.MangCodig}> <img className={style.imageMangCodig} src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392852/PF/Group_2012_ktmn8j.png" alt="MangCodig"/>MangCodig</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores tempore esse explicabo laboriosam ab nostrum repudiandae veniam nulla quaerat non exercitationem, omnis voluptatum sequi mollitia. Itaque tempore ipsam explicabo?</p>
        <div className={style.Fsec1IMGS}>
        <img src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392853/PF/Group_86_otikyv.png" alt="" />
        <img src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392852/PF/Group_88_z3wrhi.png" alt="" />
        <img src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392852/PF/Group_87_gq5wvh.png" alt="" />
        <img src="https://res.cloudinary.com/dpjeltekx/image/upload/v1690392852/PF/Group_85_ktv4zp.png" alt="" />
        </div>
      </div>
      <div className={style.Fsec2}>
        <h3>Pages</h3>
        <ul>
          <li>Home it work</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>demo</li>
        </ul>
      </div>
      <div className={style.Fsec3}>
          <h3>Service</h3>
          <ul>
            <li>Shopify</li>
            <li>WordPres</li>
            <li>UI/UX</li>
          </ul>
      </div>
      <div className={style.Fsec4}>
        <h3 style={{textAlign:'left', paddingLeft:'1rem'}}>F&A</h3>
      </div>
    </div>
  )
}

export default Footer