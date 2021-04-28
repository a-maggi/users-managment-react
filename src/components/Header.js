import UserIcon from 'assets/icons/user';
import ArrowIcon from 'assets/icons/arrow';
const Header = () => (
  <>
    <div className="p-4 px-5 flex justify-between border-b-2 border-fuchsia-600 items-center">
      <div className="title col-start-1 text-2xl font-semibold">
        User managment
      </div>
      <div className="col-end-auto title justify-items-right">
        <button className="user-account flex items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="rounded-full">
            <UserIcon />
          </div>
          <div className="pl-2">
            <div className="text-sm font-medium">Username</div>
          </div>
          <div className="pl-2">
            <ArrowIcon />
          </div>
        </button>
      </div>
    </div>
  </>
)

export default Header;