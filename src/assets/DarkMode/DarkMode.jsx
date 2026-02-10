import { useState } from "react";

function DarkMode() {
  const [myStyle, setMyStyle] = useState({
      backgroundColor : "white",
      color : "black",
      minHeight: "100vh"
  }); 

  const [btnText,setBtnText] = useState("Enable Dark Mode");

  const [btnStyle,setBtnStyle] = useState({
    backgroundColor: "lightblue",
    padding :"8px",
    borderRadius : "10px",
    margin : "10px"
  });
  
  const changeBackgroundMode = ()=>{
    if(myStyle.backgroundColor == "white"){
      setMyStyle({
        color : "#E5E7EB",
        backgroundColor : "#0F172A",
        minHeight: "100vh"
      })
      setBtnText("Enable Light Mode");
    }
    else{
      setMyStyle({
        color:"Black",
        backgroundColor:"white",
        minHeight: "100vh"
      })
      setBtnText("Enable Dark Mode");
    }
  }

  return (
    <>
      <div className="container" style={myStyle}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At explicabo neque porro nesciunt nostrum similique saepe exercitationem aperiam numquam doloribus, voluptatibus doloremque. Repellendus nisi ex architecto modi ipsam veniam iure!
        Ipsam temporibus molestias ut dolor assumenda consectetur autem porro laborum quo! Facilis, veniam officiis suscipit rem vel eos libero labore ullam commodi sint atque voluptate architecto explicabo assumenda laborum consequatur!
        Neque et harum reprehenderit incidunt expedita optio repellendus, assumenda provident reiciendis. Ipsum, at! Voluptatum nemo, quo quibusdam eveniet est accusantium harum earum, commodi rerum sapiente, asperiores placeat corporis. Laboriosam, commodi.
        Architecto ad sapiente, ex sequi doloremque culpa amet sed animi, accusantium at beatae, cumque aspernatur hic soluta odit asperiores voluptatum perferendis deleniti aliquid? Omnis quas recusandae totam dolor, soluta rerum.
        Dolorum commodi, eius laboriosam, sequi qui provident error unde libero ipsam accusantium nostrum placeat deleniti. Veniam voluptas, quibusdam, nostrum iure natus pariatur ullam, corrupti optio nulla nihil architecto voluptatem suscipit.
        Commodi, perferendis totam laudantium non quos id perspiciatis ab est cum ipsam. Perferendis tempore aliquid aliquam cumque quibusdam explicabo neque. Placeat maxime perspiciatis repellat consequuntur maiores recusandae dolore asperiores quisquam.
        Id totam delectus minima ratione accusantium officia architecto excepturi, veritatis quasi sit. Ex itaque mollitia, iusto nemo non distinctio pariatur voluptatem! Perspiciatis nostrum, quasi saepe quas non suscipit doloremque ea?
        Harum eveniet facilis ullam omnis quos dolorem, nesciunt impedit nobis corporis placeat minus? Tenetur reiciendis necessitatibus debitis sit porro, vero asperiores enim quas sequi soluta fugit tempore culpa. Et, eius.
        Laudantium harum itaque optio odio quod cumque delectus quis facilis fugiat veritatis sapiente asperiores maxime dignissimos voluptates distinctio sint debitis, nam error est numquam, corrupti vel aperiam, sequi ea. Provident.
        Culpa nostrum reprehenderit nobis quis ea sapiente, esse obcaecati inventore temporibus quae. Magni ea unde soluta nihil, velit modi explicabo blanditiis, rerum, deserunt molestias dignissimos id impedit cumque alias suscipit.
        Repellendus tenetur, inventore, ex asperiores officiis vel, eum ipsum eius voluptatum nulla doloremque. Sequi, recusandae. Placeat sapiente soluta tenetur numquam ad quasi pariatur inventore maxime tempora. Fugiat sequi ipsam eligendi.
        Eveniet itaque animi ab architecto ratione magni praesentium voluptas tempore reprehenderit nesciunt, voluptates perspiciatis saepe odio numquam laborum fugit error autem quibusdam cupiditate odit aliquam adipisci quia. Amet, at eos?
        Quisquam, quam tempora. Debitis voluptas iste delectus totam ut sequi. Sunt nam tempore natus beatae, suscipit temporibus mollitia necessitatibus omnis earum quas quidem voluptatum cupiditate voluptates nisi, quibusdam, autem sapiente?
        Nisi consequatur mollitia, enim eligendi voluptate nulla delectus asperiores laborum assumenda, ab maiores. Minima debitis odit, ea molestiae eum, minus voluptates quam maxime eos quaerat in ratione, enim cupiditate! Esse?
        Nemo sequi adipisci tenetur quasi fugiat suscipit consectetur nesciunt alias corporis voluptatem quibusdam et, modi corrupti. Quo laborum voluptate asperiores eaque officiis maiores, facere qui adipisci laboriosam quisquam maxime? Totam!
        Nostrum laudantium pariatur minus deleniti dolore unde architecto ipsam, aliquid officia a nisi quae. Ab perferendis vero placeat earum, magni, recusandae iste accusantium soluta quo ducimus accusamus dolorum aut! Odit.
        Temporibus cumque sequi, incidunt laudantium libero quis tempore qui magnam voluptate atque saepe molestias doloremque dolorum maxime, rem sed officia quas? Eum enim modi ut, facilis soluta quis eaque id?
        Cum dolore alias provident soluta incidunt doloribus inventore officia, culpa sunt necessitatibus voluptate dicta nisi modi odio sit. Quia dignissimos odio, harum provident a mollitia veritatis natus officiis aliquam quis?
        Iste, ducimus quisquam. Ullam vel quas accusantium id quisquam facilis eveniet maiores vero exercitationem? Et, tempora mollitia laboriosam adipisci suscipit sunt totam id quae eius cum magni fuga, culpa ad.
        Eaque reprehenderit ipsa ducimus, distinctio dicta nesciunt? Necessitatibus similique fugiat quos illo? Quae nisi iure quam numquam delectus laborum aspernatur quia voluptatum aliquid, facere accusantium commodi reprehenderit labore! Itaque, esse?
        Sapiente, adipisci? Ducimus consequuntur qui culpa sint tempore optio in quasi vero, modi, voluptatem hic. Sed doloremque architecto excepturi modi omnis atque laboriosam! Dolor, accusantium consequuntur magni error atque illum?
        Vitae, ut necessitatibus id enim numquam, ex animi in eum tempora reprehenderit voluptates esse soluta ipsa officiis earum quod. Unde placeat fuga nam ut? Veniam voluptates maxime fugit sint placeat?
        Atque earum quibusdam esse laborum! Minima veritatis necessitatibus facilis! Quis error, consequuntur inventore sed optio assumenda accusantium quia repudiandae pariatur excepturi commodi, accusamus iste rerum! Quaerat alias reiciendis ipsum ipsa.
        Consequuntur quibusdam, repudiandae voluptate tempore, explicabo aliquid vero laborum quam delectus minima quis nobis enim quod eaque laudantium quae amet officiis illum praesentium harum magnam tenetur quo nihil dolores? Dicta!
        Aspernatur quod velit ut magnam deleniti nemo repellendus asperiores, fuga nobis tempora perferendis ducimus. Culpa incidunt modi sit sequi, ipsa praesentium itaque. Dignissimos vero doloribus maxime cumque deleniti laudantium nihil.
        Aliquid quis provident eaque veniam perspiciatis amet earum soluta, ipsa quod labore! Earum saepe impedit debitis explicabo beatae quasi ipsam, quam ducimus nihil ut officiis nulla cum rerum sequi reiciendis!
        Sed sequi tempora vero fugit est ipsum nisi nulla eligendi, nesciunt quae at culpa. Sequi commodi officia, doloribus quidem vel accusantium delectus recusandae, asperiores iste consectetur magni pariatur in ipsum?
        Debitis, minima et sed vitae maxime assumenda earum dolorum illum ipsa vero accusamus dolores, id alias rerum nobis mollitia voluptatum aliquam exercitationem? Expedita ullam doloremque mollitia vero, magni labore amet.
        Sint assumenda veritatis numquam dolorum, iusto commodi impedit beatae velit, maiores corporis reprehenderit eligendi at officiis natus fugit hic porro architecto ipsum nisi ipsa, sed soluta. Quidem aspernatur dolor assumenda?
        Unde sequi earum fuga consectetur commodi, distinctio porro omnis laboriosam necessitatibus ipsum optio repellat inventore adipisci sint dignissimos magnam cumque debitis accusantium quas. Dolores sequi neque et quasi totam ex.
        Quo ut esse quia neque quisquam unde blanditiis magni laudantium ullam nam voluptatem minima, dicta optio natus sint rem necessitatibus. Maxime sint aspernatur laboriosam ratione vero, provident culpa consequatur id.
        At, fuga! Sed, inventore. Error labore optio libero cum consequuntur tempora, quibusdam odit expedita fuga sit minus possimus ea maxime aperiam sequi explicabo laudantium. Accusamus quam esse quisquam possimus ipsam.
        Animi ullam nesciunt esse temporibus? Fuga, dicta debitis numquam sunt non magni officiis qui in, voluptatem accusantium nostrum ducimus natus nobis quod, dignissimos veniam? Ratione tempora sapiente quam perspiciatis reiciendis?
        Pariatur facere, distinctio corrupti consectetur sapiente vero ad iure eius cum voluptatum vel recusandae temporibus! Ex ea accusantium iure natus cumque culpa, esse numquam magni nobis aliquam in dolorum perspiciatis.
        Cum quisquam, exercitationem debitis architecto facere consequuntur temporibus, saepe optio dolore quasi quod dolorum? Commodi repellat saepe modi quaerat architecto praesentium cupiditate, ullam exercitationem. Quod, necessitatibus! Voluptatum repudiandae aut vitae!
        Nostrum ad molestias, quas suscipit et dolorum saepe reprehenderit consectetur molestiae ratione omnis, nisi, modi sint deleniti tenetur laborum. Aliquid, tenetur a. Voluptatem commodi doloremque, fugiat voluptate error minus nam?
        Alias pariatur voluptatem assumenda modi, officiis minus illum sapiente accusantium atque quam corporis provident tempora, architecto animi earum asperiores iste sit, impedit natus vero commodi maiores. Deserunt enim alias rem!
        Unde totam vitae aut voluptatum enim illo dolores, quod omnis incidunt ratione ab, cupiditate esse? Harum dignissimos hic suscipit ab laborum praesentium, ratione vel molestiae nisi, aperiam beatae soluta architecto!
        Deserunt veniam nemo mollitia eum voluptatibus eligendi sint minus provident aliquam placeat, quae eaque accusamus illum, facilis hic dolorem numquam quam perferendis! Nam, at. Doloribus, ratione neque? Quas, necessitatibus veniam!
        Eveniet omnis modi, autem alias dolorum, aut temporibus excepturi sed quibusdam ab, beatae libero eaque esse optio dignissimos neque doloremque aspernatur distinctio. Officia obcaecati quaerat, voluptatem amet quis reprehenderit minima?</p>
        <button className="btn" type="button" onClick={changeBackgroundMode} style={btnStyle}>{btnText}</button>
      </div>

    </>
  )
}

export default DarkMode
