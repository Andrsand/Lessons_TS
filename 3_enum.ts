// enum помогает структурировать код с однотипными элементами

enum Membership {
    Simple, // 0
    Standart, // 1
    Premium // 2
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership); // 1
console.log(membershipReverse); // строковое значение - Premium

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM' // явно указываем тип значения
}

const social = SocialMedia.INSTAGRAM;
console.log(social); // INSTAGRAM   