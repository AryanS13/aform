import "../../styles/product.scss"
import ProfileSection from "./profile-section/profile-section";
import WorkSpaceSection from "./workspace-section/workspace-section";

export default function NavBar() {
    return (
        <div className="top-nav-bar px-4">
            <WorkSpaceSection />
            <ProfileSection />
        </div>
    );
}