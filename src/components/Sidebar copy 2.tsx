import React from "react";
import { useLocation, Link } from 'react-router-dom';
import { FiGrid, FiShoppingCart, FiLifeBuoy, FiEdit, FiDatabase, FiFeather, FiPenTool, FiFramer, FiGitCommit, FiPackage, FiCodesandbox, FiPlus, FiMinus, FiArrowLeft, FiArrowRight  } from 'react-icons/fi';

const Sidebar = () => {
  const { pathname } = useLocation();
  const lists = [
    {
      index: 1,
      name: 'Dashboard',
      path: '/',
      icon: <FiGrid />
    },
    {
      index: 1,
      name: 'Market',
      path: '/market',
      icon: <FiShoppingCart />
    },
    {
      index: 1,
      name: 'Agents',
      path: '/agents',
      icon: <FiLifeBuoy/>
    },
    {
      index: 1,
      name: 'Prompt Templates',
      path: '/promptTemplates',
      icon: <FiEdit />
    },
    {
      index: 1,
      name: 'Oracles',
      path: '/oracles',
      icon: <FiDatabase/>
    },
    {
      index: 0,
      name: "ACTIVITY",
      children: [
        {
          name: 'Inference',
          path: '/inference',
          icon: <FiFeather />
        },
        {
          name: 'Prompts',
          path: '/prompts',
          icon: <FiPenTool />
        },
        {
          name: 'Training',
          path: '/training',
          icon: <FiFramer />
        },
      ]
    },
    {
      index: 0,
      name: 'INFRASTRUCTURE',
      children: [
        {
          name: 'Nodes',
          path: '/nodes',
          icon: <FiGitCommit/>
        },
        {
          name: 'Models',
          path: '/models',
          icon: <FiPackage />
        },
        {
          name: 'Data Blocks',
          path: '/dataBlocks',
          icon: <FiCodesandbox />
        },
      ]
    },
  ];

  return (
    <div className="sidebar dark:bg-coal-600 bg-light border-e border-e-gray-200 dark:border-e-coal-100 fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0" data-drawer="true" data-drawer-class="drawer drawer-start top-0 bottom-0" data-drawer-enable="true|lg:false" id="sidebar">
      <div className="sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0" id="sidebar_header">
        <Link className="dark:hidden" to="/">
          <img className="default-logo min-h-[22px] max-w-none" src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/app/default-logo.svg"/>
          <img className="small-logo min-h-[22px] max-w-none" src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/app/mini-logo.svg"/>
        </Link>
        <Link className="hidden dark:block" to="/">
          <img className="default-logo min-h-[22px] max-w-none" src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/app/default-logo-dark.svg"/>
          <img className="small-logo min-h-[22px] max-w-none" src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/app/mini-logo.svg"/>
        </Link>
        <button className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4" data-toggle="body" data-toggle-class="sidebar-collapse" id="sidebar_toggle">
          <FiArrowLeft />
          {/* <i className="ki-filled ki-black-left-line toggle-active:rotate-180 transition-all duration-300 rtl:translate rtl:rotate-180 rtl:toggle-active:rotate-0">
          </i> */}
        </button>
      </div>
      <div className="sidebar-content overflow-y-scroll flex grow shrink-0 py-5 pe-2" id="sidebar_content h-[300px]">
        <div className="scrollable-y-hover grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3" data-scrollable="true" 
        style={{overflowY:'scroll'}}
        //  data-scrollable-dependencies="#sidebar_header" data-scrollable-height="auto" data-scrollable-offset="0px" data-scrollable-wrappers="#sidebar_content"
          id="sidebar_scrollable1">
          <div className="menu 1overflow-auto flex flex-col grow gap-0.5" data-menu1="true" data-menu-accordion-expand-all1="false" id1="sidebar_menu">
            {/* Add client's pages */}
            {
              lists.map((list, index) => {
                return (
                  list.index === 0 ?
                  <div key={list.name}>
                  <div className="menu-item pt-2.25 pb-px">
                    <span className="menu-heading uppercase text-2sm font-medium text-gray-500 ps-[10px] pe-[10px]">
                    {list.name}
                    </span>
                  </div>
                  {
                    list.children.map((list, index) => {
                      return (
                        <Link to={list.path} key={index} className={`${pathname===list.path && 'bg-gray-300 '} hover:bg-gray-200 rounded menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]`} tabIndex={0}>
                          <span className={`${pathname===list.path ? 'text-blue-400' : 'text-gray-500 dark:text-gray-400'} 1menu-icon items-start w-[20px]`}>
                            {/* <i className="ki-filled ki-element-11 text-lg">
                            </i> */}
                            {list.icon}
                          </span>

                          <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                            {list.name}
                          </span>

                          <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                            <FiPlus />
                            {/* <FiPlus />
                            <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                            </i>
                            <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                            </i> */}
                          </span>
                        </Link>
                      )
                    })
                  }
                  </div>
                  : 
                  <Link to={list.path} key={list.name} className={`${pathname===list.path && 'bg-gray-300'} hover:bg-gray-200 rounded menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]`} tabIndex={0}>
                    <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                      {/* <i className="ki-filled ki-element-11 text-lg">
                      </i> */}
                      {list.icon}
                    </span>

                    <span className="menu-title text-sm font-medium text-gray-800 menu-item-active:text-primary menu-link-hover:!text-primary">
                      {list.name}
                    </span>

                    <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                      {/* <i className="ki-filled ki-plus text-2xs menu-item-show:hidden">
                      </i>
                      <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex">
                      </i> */}
                    </span>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
   </div>
  )
}

export default Sidebar
