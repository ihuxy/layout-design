## layout





一般一个系统平台的头部、底部、面包屑、侧边栏、设置栏都是公用的，我们可以将这些抽离出来，作为页面layout布局。

例如，下面是一个简单的页面框架布局，包含头部、底部、主题设置、正文部分，正文部分又包含了菜单、面包屑、内容区域。


	const Layout=props=>{
	  const {menu}=props;
	  const [showMenu,setShowMenu]=useState(false);
	  const [theme,setTheme]=useState(storage.get('theme')||'dark');
	  const switchTheme=theme=>{
	    storage.set('theme',theme);
	    setTheme(theme);
	  };
	  const collapseMenu=show=>show===false?setShowMenu(show):setShowMenu(state=>!state);
	  const showMenuCls=showMenu?' showMenu':'';
	  return <div className={`frame ${theme}`}>
	    <header className="frame-header">
	      <Header {...props} collapseMenu={collapseMenu} theme={theme} switchTheme={switchTheme} />
	    </header>
	    <main className="frame-main">
	      <Main {...props} showMenu={showMenuCls} menu={menu} />
	    </main>
	    <footer className={`frame-footer${showMenuCls}`}>
	      <Footer />
	    </footer>
	  </div>;
	};
	
	const breadcrumb=current=><div className="breadcrumb">
	  <span style={{float:'left'}}>当前位置： </span>
	  <ul>
	    {current.filter(v=>v.name).map(v=>v.path!=='/'&&<li key={v.path}><Link to={v.path}>{v.name}</Link></li>)}
	  </ul>
	</div>;
	
	const Main=props=>{
	  const {menu,current,children,showMenu}=props;
	  return <div className="frame-container">
	    <aside className={`frame-aside${showMenu}`}>
	      <Menu menu={menu} collapsed={!!showMenu} />
	    </aside>
	    <div className={`frame-view${showMenu}`}>
	      <div className="page-container">
	        {breadcrumb(current)}
	        <div className="content">
	          {children}
	        </div>
	      </div>
	    </div>
	  </div>;
	};


通过css媒体查询，我们可以作多终端适配。

	.frame{
	  .frame-header{
	    position:fixed;
	    top:0;
	    left:0;
	    right:0;
	    z-index:10;
	    color:@appColor;
	  }
	  .frame-footer{
	    height:@footerHeight;
	    line-height:@footerHeight;
	    position:fixed;
	    bottom:0;
	    left:0;
	    right:0;
	    z-index:2;
	    .footer{
	      background-color:@footerBgColor;
	      max-width:@maxWidth;
	      padding-left:@menuWidth;
	      transition:left .3s;
	    }
	    &.showMenu{
	      .footer{
	        padding-left:@collapseWidth;
	        transition:left .3s;
	      }
	    }
	  }
	  .frame-main{
	    max-width:@maxWidth;
	    margin:0 auto;
	    padding-top:@topHeight;
	    padding-bottom:@footerHeight;
	    box-shadow:@borderShadow;
	    z-index:5;
	    .frame-container{
	      position:relative;
	      .frame-aside{
	        position:fixed;
	        width:@menuWidth;
	        top:@topHeight;
	        bottom:0;
	        z-index:5;
	        color:@appColor;
	        transition:width .3s;
	        &.showMenu{
	          width:@collapseWidth;
	          transition:width .3s;
	        }
	      }
	      .frame-view{
	        padding-left:@menuWidth;
	        min-height:calc(100vh - @footerHeight - @topHeight);
	        transition:padding-left .3s;
	        &.showMenu{
	          padding-left:@collapseWidth;
	          transition:padding-left .3s;
	        }
	      }
	    }
	  }
	}
	
	@media screen and (max-width:1024px){
	  .frame{
	    .frame-main{
	      .frame-container{
	        .frame-aside{
	          width:0;
	          &.showMenu{
	            width:@menuWidth;
	          }
	        }
	        .frame-view{
	          padding-left:0;
	          &.showMenu{
	            padding-left:0;
	          }
	        }
	      }
	    }
	    .frame-footer{
	      .footer{
	        padding-left:0;
	      }
	      &.showMenu{
	        .footer{
	          padding-left:0;
	        }
	      }
	    }
	  }
	}

如果需要头部横向菜单，我们可以在header里面配置。如：

	<Header {...props} menu={navMenu} collapseMenu={collapseMenu} theme={theme} switchTheme={switchTheme} />


也可根据需求、设计自定义各种layout布局。


通过整体样式配置，来灵活更换主题。

	.frame.dark{
	  --maxWidth:100%;
	  --menuWidth:200px;
	  --headerHeight:52px;
	  --footerHeight:40px;
	  --collapseWidth:50px;
	  --collapseMenuWidth:160px;
	  --topbarHeight:0px;
	  --breadHeight:40px;
	  --bannerBgColor:#21364a;
	  --navBgColor:#21364a;
	  --menuBgColor:#2d4054;
	  --deepMenuBgColor:hsla(0,0%,0%,.03);
	  --appColor:#ffffff;
	  --linkColor:#f0f0f0;
	  --linkHoverColor:#40a9ff;
	  --linkActiveColor:#40a9ff;
	  --appBgColor:#eaeff2;
	  --footerBgColor:#ffffff;
	}
	.frame.light{
	  --maxWidth:1200px;
	  --menuWidth:220px;
	  --headerHeight:50px;
	  --footerHeight:45px;
	  --collapseWidth:0px;
	  --collapseMenuWidth:160px;
	  --topbarHeight:0px;
	  --breadHeight:45px;
	  --bannerBgColor:#fcfcfc;
	  --navBgColor:#ffffff;
	  --menuBgColor:#fcfcfc;
	  --deepMenuBgColor:hsla(0,0%,0%,.03);
	  --appColor:#333333;
	  --linkColor:#444444;
	  --linkHoverColor:#3498db;
	  --linkActiveColor:#3498db;
	  --appBgColor:#f3f3f3;
	  --footerBgColor:#ffffff;
	}



useLayout(configs);

useTheme(configs);



