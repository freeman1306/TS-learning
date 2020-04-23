enum Membership {
    Simple,
    Standart,
    Permium
}

const membership = Membership.Standart
console.log(membership);

const membrev = Membership[2]
console.log(membrev);
