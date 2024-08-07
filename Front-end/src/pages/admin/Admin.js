import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebarMenu from "../../components/admin/AdminSidebarMenu";

export default function Admin() {
  return (
    <>
      <div className="admin-page">
        <AdminNavbar />
        <div className="container-fluid">
          <div className="row">
            <AdminSidebarMenu />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Outlet></Outlet>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
