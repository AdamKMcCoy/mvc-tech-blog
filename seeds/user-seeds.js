import { User } from '../models';
const userData =[
{"username":"Adam","email":"Adam@luckyman.com","password":"e134rgwe"},
{"username":"Kayla","email":"Kayla@wife.com","password":"lkjtgiojrstnjg"},
{"username":"Piper","email":"Devilchild@redheard.org","password":"654erwjhu9e8"},
{"username":"Lukas","email":"Lukas@son.ca","password":"oeuqrgq"},
{"username":"Emmett","email":"Emmett@son.ca","password":"8PFLDMV"},
{"username":"Bill","email":"Bill@dad.com","password":"JMnh651"},
{"username":"Amanda","email":"Amanda@sister.com","password":"wtnme651465"},
{"username":"Biff","email":"Biff@backtothefuter.com","password":"SFNsfgtn561"},
{"username":"Mcfly","email":"Mcfly@backtothefuter.com","password":"3654asfb"},
{"username":"George","email":"George@backtothefuter.com","password":"3201ggshn"}
]
const seedUsers = () => User.bulkCreate(userData);
export default seedUsers