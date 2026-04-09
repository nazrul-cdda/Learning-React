
import { UserMenu } from "./UserMenu";

export const NavigationBar = () => {
    return(
        <nav>
            <h3>Navigation</h3>
            <h4>Check: {user.name}</h4>
            <UserMenu />
        </nav>
    )
}