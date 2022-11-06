import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
const Navbar = () => {
  let role = "USER1";
  let show = 1;
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
            // alert(JSON.stringify(menu.title));
            // alert(JSON.stringify(menu.role));
            // alert(index);
            // alert(role);
            // if(menu.submenu.length>0){
            //   {menu.submenu.map((submenu, index) => {
            //     alert(JSON.stringify(submenu.title));
            //   })}
              
            // }
            
            //If condition role wise
            if(menu.permission ==='permitted'){
                {menu.role.map((role, index) => {
                // alert(JSON.stringify(role.roleName));
                if(role.roleName === 'USER'){
                  alert(JSON.stringify(role.roleName));
                  show=0;
                  // const depthLevel = 0;
                  // return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                }
              })}

            }
          const depthLevel = 0;
          if(show==1){
            return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
          }
          show=1;
          
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
