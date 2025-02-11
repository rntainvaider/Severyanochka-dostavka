import styles from "./styles.module.css";
import logo from "../../assets/logo.svg";
import catalog from "../../assets/catalog.svg";
import search from "../../assets/search.svg";
import favorite from "../../assets/favorite.svg";
import orders from "../../assets/orders.svg";
import cart from "../../assets/cart.svg"
import user from "../../assets/user.svg"
import down from "../../assets/down.svg"

const Header = () => {
    return (
        <div className={styles["header"]}>
            <div className={styles["header__wrapper"]}>
                <div className={styles["header__left"]}>
                    <img src={logo} alt="СЕВЕРЯНОЧКА" className={styles["header__logo"]} />
                    <div className={styles["header__leftWrapper"]}>
                        <div className={styles["header__catalogButton"]}>
                            <img src={catalog} alt="" />
                            <p className={styles["header__buttonTitle"]}>
                                Каталог
                            </p>
                        </div>
                        <div className={styles["header__search"]}>
                            <input type="text" className={styles["header__serachInput"]} placeholder="Найти товар" />
                            <img src={search} alt="" className={styles["header__searchIcon"]} />
                        </div>
                    </div>
                </div>
                <div className={styles["header__right"]}>
                    <div className={styles["header__rightLink"]}>
                        <img src={favorite} alt="" />
                        <p className={styles["header__linkTitle"]}>Избранное</p>
                    </div>
                    <div className={styles["header__rightLink"]}>
                        <img src={orders} alt="" />
                        <p className={styles["header__linkTitle"]}>Заказы</p>
                    </div>
                    <div className={styles["header__rightLink"]}>
                        <img src={cart} alt="" />
                        <p className={styles["header__linkTitle"]}>Корзина</p>
                    </div>
                    <div className={styles["header__userMenu"]}>
                        <img src={user} alt="" className={styles["header__userPhoto"]} />
                        <p className={styles["header__userName"]}>
                            Алексей
                        </p>
                        <img src={down} alt="" className={styles["header__imgDown"]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header
