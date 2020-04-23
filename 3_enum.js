var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Permium"] = 2] = "Permium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
console.log(membership);
var membrev = Membership[2];
console.log(membrev);
