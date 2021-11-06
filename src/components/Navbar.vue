<template>
    <div class="Nav">
        <div class="main-line">
            <a class="navbar-brand" href="/" exact><img src="../assets/images/favicon.png"> <span>Results Of Pes Trophies</span></a>
            <div class="buttons">
                <button data-toggle="modal" data-target="#LOG"><i class="fas fa-sign-in-alt"></i> الدخول</button>
                <button data-toggle="modal" data-target="#REG"><i class="fas fa-unlock-alt"></i> التسجيل</button>
            </div>
            <div class="loggedIn">
                <span class="authName" data-toggle="modal" data-target="#EDIT_PROFILE" title="Edit Personal Information">NO USER YET</span>
                <img src="../assets/images/person.jpg" class="authImg" data-toggle="modal" data-target="#EDIT_PROFILE" title="Edit Personal Information">
                <div class="cont">
                    <div class="btns">
                        <i class="fas fa-cog adminpanel" title="عرض لوحة الادمن ؟" data-toggle="modal" data-target="#ADMIN_PANEL"></i>
                        <i class="fas fa-sign-out-alt" @click="logout" title="تسجيل الخروج ؟"></i>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/" exact><img src="../assets/images/homeW.svg"> الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/news"><img src="../assets/images/newsW.svg"> الاخبار</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tournaments"><img src="../assets/images/tournamentW.svg"> البطولات</a>
                        <ul class="drop">
                            <li><a href="/tournaments/pl"><i class="fas fa-trophy"></i> الدوري الانجليزي</a></li>
                            <li><a href="/tournaments/fa"><i class="fas fa-trophy"></i> كأس الاتحاد الانجليزي</a></li>
                            <li><a href="/tournaments/cs"><i class="fas fa-trophy"></i> الدرع الخيرية</a></li>
                            <li><a href="/tournaments/ucl"><i class="fas fa-trophy"></i> دوري أبطال أوروبا</a></li>
                            <li><a href="/tournaments/uel"><i class="fas fa-trophy"></i> الدوري الاوروبي</a></li>
                            <li><a href="/tournaments/usc"><i class="fas fa-trophy"></i> كأس السوبر الاوروبي</a></li>
                            <li><a href="/tournaments/fcwc"><i class="fas fa-trophy"></i> كأس العالم للاندية</a></li>
                            <li><a href="/tournaments/afcon"><i class="fas fa-trophy"></i> كأس الامم ألافريقية</a></li>
                            <li><a href="/tournaments/wcq"><i class="fas fa-trophy"></i> تصفيات كأس العالم</a></li>
                            <li><a href="/tournaments/fwc"><i class="fas fa-trophy"></i> كأس العالم</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/rankings"><img src="../assets/images/rankingW.svg"> التصنيف</a>
                        <ul class="drop">
                            <li><a href="/rankings/clubs"><i class="fab fa-free-code-camp"></i> تصنيف الاندية</a></li>
                            <li><a href="/rankings/nationals"><i class="fab fa-free-code-camp"></i> تصنيف المنتخبات</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/market"><img src="../assets/images/transferW.svg"> سوق الانتقالات</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/players"><img src="../assets/images/playerW.svg"> إحصائيات اللاعبين</a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- REGISTER MODAL -->
        <div class="modal fade" id="REG" tabindex="-1" role="dialog" aria-labelledby="REGLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="REGLabel">تسجيل عضوية جديدة</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="../assets/images/auth.svg">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Username:</label>
                            <input type="text" class="form-control" id="REGusername" placeholder="Username">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Email Address:</label>
                            <input type="email" class="form-control" id="REGemail" placeholder="Email Address">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Password:</label>
                            <input type="password" class="form-control" id="REGpass" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Picture:</label>
                            <input type="file" class="form-control" id="REGpic">
                        </div>
                    </form>
                </div>
                <p>Already Have An Account? <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#LOG">Login</a></p>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="Register($event)">Register</button>
                </div>
                </div>
            </div>
        </div>

        <!-- LOGIN MODAL -->
        <div class="modal fade" id="LOG" tabindex="-1" role="dialog" aria-labelledby="LOGLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="LOGLabel">تسجيل الدخول</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="../assets/images/auth.svg">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Email Address:</label>
                            <input type="email" class="form-control" id="LOGemail" placeholder="Email Address">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Password:</label>
                            <input type="password" class="form-control" id="LOGpass" placeholder="Password">
                        </div>
                    </form>
                </div>
                <p class="m-0">Forget Your Password? <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#RESET">Reset Password</a></p>
                <p>Haven't Any Account Yet? <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#REG">Register</a></p>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="Login">LOGIN</button>
                </div>
                </div>
            </div>
        </div>

        <!-- RESET PASSWORD MODAL -->
        <div class="modal fade" id="RESET" tabindex="-1" role="dialog" aria-labelledby="RESETLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="RESETLabel">إسترجاع كلمة المرور</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="../assets/images/forget.svg">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Email Address:</label>
                            <input type="email" class="form-control" id="RESETemail" placeholder="Email Address">
                        </div>
                    </form>
                </div>
                <p>Already Have An Account? <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#LOG">Login</a></p>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="reset">Reset Password</button>
                </div>
                </div>
            </div>
        </div>

        <!-- EDIT PROFILE MODAL -->
        <div class="modal fade" id="EDIT_PROFILE" tabindex="-1" role="dialog" aria-labelledby="EDIT_PROFILELabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="EDIT_PROFILELabel">تعديل المعلومات الشخصية</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img src="../assets/images/profile.svg">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Username:</label>
                            <input type="text" class="form-control" id="EDIT_PROFILEusername" placeholder="Username">
                            <button type="button" class="btn btn-primary" @click="editUsername">Edit Username</button>
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Enter Old Password:</label>
                            <input type="password" class="form-control" id="OldEDIT_PROFILEpass" placeholder="Enter Old Password">
                            <label for="recipient-name" class="col-form-label">Enter New Password:</label>
                            <input type="password" class="form-control" id="NewEDIT_PROFILEpass" placeholder="Enter New Password">
                            <button type="button" class="btn btn-primary" @click="editPassword">Edit Password</button>
                        </div>
                        <div class="form-group">
                            <img id="EDIT_PROFILE_PIC_Preview" src="">
                            <label for="recipient-name" class="col-form-label">New Picture:</label>
                            <input type="file" class="form-control" id="EDIT_PROFILEpic">
                            <button type="button" class="btn btn-primary" @click="editPicture($event)">Edit Picture</button>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Cancel</button>
                </div>
                </div>
            </div>
        </div>

        <!-- ADMIN MODAL -->
        <div class="modal fade" id="ADMIN_PANEL" tabindex="-1" role="dialog" aria-labelledby="ADMIN_PANELLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="ADMIN_PANELLabel">لوحة الادمن</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="../assets/images/dashboard.svg">
                        <table>
                            <tr>
                                <th>الاسم كاملاُ</th>
                                <th>البريد الالكتروني</th>
                                <th>التاريخ</th>
                                <th>الرسالة</th>
                            </tr>
                            <tr v-for="msg in messages" :key="msg.message">
                                <td>{{msg.fullName}}</td>
                                <td>{{msg.email}}</td>
                                <td>{{msg.date}}</td>
                                <td>{{msg.message}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.main-line{
    direction: ltr;
    background: #fff;
    display: flex;
    text-align: center;
    padding: 8px;    
    position: relative;
    z-index: 9;
    span{
        color: $mc;
        direction: ltr;
    }
    .loggedIn{
        display: none;
        direction: ltr;
        width: 80%;
        text-align: right;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            padding: 2px;
            background: $mc;
            margin-left: 10px;
            box-shadow: 0 2px 5px rgba($color: $mc, $alpha: 0.4);
            cursor: pointer;
        }
        span{
            font-weight: bold;
            font-family: 'Caveat Brush', cursive;
            font-size: 18px;
            color: $mc;
            cursor: pointer;
        }
        .cont{
            display: inline-block;
            position: relative;
            top: -10px;
            .btns{
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                i{
                    border-radius: 50%;
                    padding: 5px;
                    font-size: 15px;
                    margin-top: 5px;
                    cursor: pointer;
                    background: $mc;
                    color: #fff;
                    box-shadow: 0 3px 5px rgba($color: $mc, $alpha: 0.3);
                    &:hover{
                        background: #fff;
                        color: $mc;
                    }
                }
            }
        }
    }
    .buttons{
        direction: ltr;
        width: 78%;
        text-align: right;
        @include sm {
            width: 85%;
        }
        button{
            margin: 8px 5px;
            border: none;
            border-radius: 5px;
            color: #fff;
            padding: 6px 30px;
            background: $mc;
            font-family: one;
            @include sm {
                padding: 5px 15px;
                font-size: 14px;
            }
            i{
                margin-left: 5px;
                color: #fff;
                @include sm {
                    display: none;
                }
            }
            &:hover{
                transform: none;
                color: $mc;
                background: #fff;
                i{
                    color: $mc;
                }
            }
        }
    }
    .navbar-brand{
        direction: ltr;
        text-decoration: none;
        color: #fff;
        padding: 0 10px;
        span{
            font-family: 'Shojumaru', cursive;
            font-size: 14px;
            margin-left: 7px;
            @include sm {
                display: none;
            }
        }
        img{
            margin: 0 auto;
            width: 50px;
            height: 50px;
        }
    }
}
.navbar-dark.bg-dark{
    background: $mc!important;
    padding: 0;
    box-shadow: 0 3px 10px rgba($color: #000000, $alpha: 0.7);
    border-bottom: 1px solid #fff;
    @include md {
        padding: 5px;
    }
    .navbar-toggler{
        outline: none;
    }
    .nav-item:hover{
        .drop{
            opacity: 1;
            transform: translateY(0);
            z-index: 2;
            @include md {
                height: auto;
            }
        }
    }
    li.nav-item{
        position: relative;
        z-index: 8;
        background: $mc;
        padding: 0;
        img{
            width: 22px;
            position: relative;
            top: -3px;
            margin-left: 3px;
        }
        .nav-link{
            font-family: one;
            background: $mc;
            color: #fff;
            font-size: 22px;
            padding: 13px 20px;
            position: relative;
            z-index: 3;
            text-align: right;
            &:hover{
                background: #023474;
            }
            @include lg {
                font-size: 17px;
            }
            &.a-active{
                background: #023474;
            }
        }
        .drop{
            opacity: 0;
            transform: translateY(-1000px);
            position: absolute;
            top: 60px;
            right: 0;
            z-index: -1;
            width: 250px;
            border-bottom: 5px solid #fff;
            border-radius: 0 0 8px 8px;
            @include lg {
                top: 50px;
            }
            @include md {
                position: relative;
                top: 0;
                transform: translateY(0);
                opacity: 1;
                width: 100%;
                border-bottom: 0px solid #fff;
                height: 0;
                overflow: hidden;
            }
            li{
                text-align: right;
                cursor: pointer;
                width: 100%;
                background: $mc;
                padding: 13px 15px;
                a{
                    font-family: one;
                }
                i{
                    color: #fff;
                    position: relative;
                    margin-left: 5px;
                    top: 2px;
                }
                @include md {
                    border-left: 10px solid $mc;
                }
                &:hover{
                    background: #fff;
                    a {
                        color: $mc;
                    }
                    i{
                        color: $mc;
                    }
                }
                a{
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
        .dropdown-menu{
            padding: 5px 0;
            .dropdown-item{
                padding: 10px 20px;
                &:hover{
                    background: $mc;
                    color: #fff;
                }
            }
        }
    }
}
</style>

<style lang="scss">
.modal{
    padding: 0!important;
    .modal-dialog{
        max-width: 100%!important;
        height: 100vh;
        margin: 0;
        .modal-content{
            height: 100%;
            overflow: scroll;
            p{
                text-align: center;
                font-family: 'changa';
                a {
                    font-family: 'changa';
                    text-decoration: none;
                    color: $mc;
                }
            }
        }
        .modal-header {
            h4{
                font-family: 'changa';
                text-align: center;
                font-weight: bold;
                margin: 0;
                width: 100%
            }
            .close{
                padding: 0px 9px 7px!important;
                margin: 0!important;
                border-radius: 5px;
                background: $mc;
                opacity: 1;
                color: #fff;
            }
        }
        .modal-body{
            padding: 1rem 25px!important;
            img{
                display: block;
                width: 250px;
                height: 250px;
                margin: 0 auto 10px;
            }
            table{
                width: 100%;
                margin: 10px auto;
                tr{
                    th{
                        padding: 10px 15px;
                        background: $mc;
                        font-family: 'changa';
                        font-weight: bold;
                        color: #fff;
                    }
                    td{
                        direction: rtl;
                        text-align: right;
                        padding: 7px 15px;
                        font-family: 'changa';
                        &:nth-child(2){
                            background: #f6f6f6;
                            direction: ltr;
                            text-align: left;
                        }
                        &:nth-child(4){
                            min-width: 35%;
                        }
                        @include xs {
                            font-size: 13px;
                        }
                    }
                }
            }
            .form-group{
                img{
                    width: 100px;
                    height: 100px;
                    display: block;
                    margin: 25px auto -5px;
                    background: #f6f6f6;
                    padding: 5px;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #ccc;
                }
                label {
                    text-align: left;
                    direction: ltr;
                    font-family: 'changa';
                    width: 50%;
                    display: block;
                    margin: auto;
                    @include sm {
                        width: 65%;
                    }
                    @include xs {
                        width: 85%;
                    }
                }
                input {
                    font-family: 'changa';
                    direction: ltr;
                    width: 50%;
                    display: block;
                    margin: auto;
                    @include sm {
                        width: 65%;
                    }
                    @include xs {
                        width: 85%;
                    }
                }
                button{
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    padding: 6px 40px;
                    background: $mc;
                    font-family: 'changa';
                    display: block;
                    margin: 8px auto;
                    @include sm {
                        padding: 5px 30px;
                        font-size: 14px;
                    }
                    i{
                        margin-left: 5px;
                        color: #fff;
                        @include sm {
                            display: none;
                        }
                    }
                    &:hover{
                        transform: none;
                        color: $mc;
                        background: #fff;
                        i{
                            color: $mc;
                        }
                    }
                }
            }
        }
        .modal-footer{
            margin: auto;
            .btn{
                margin-right: 10px;
                font-family: 'changa';
            }
        }
    }

}
.swal2-input{
    direction: ltr;
    font-family: "Poppins", sans-serif;
    text-align: left;
}
</style>

<script>
export default {
    name: "Navbar",
    data(){
        return {
            RegEmail: null,
            RegPass: null,
            LogEmail: null,
            LogPass: null,
            messages: []
        }
    },
    methods: {
        Register(e){
            e.path[0].innerHTML = "Please Wait ....";
            var username = $("#REGusername").val();
            var email = $("#REGemail").val();
            var password = $("#REGpass").val();
            var image = $("#REGpic").val();
            if(username != false && password != false && image != false && email != false){
                auth.signup(email, password).then(() => {
                    storage.upload("#REGpic", `users/${auth.user().uid}`).then(url => {
                        db.add(`users/${auth.user().uid}`, {
                            email, username, 
                            uid: auth.user().uid,
                            image: url,
                            admin: false,
                            master: false
                        }).then(() => {
                            Swal.fire(
                                'تم تسجيل عضويتك بنجاح!',
                                `مرحباُ بك ${username}`,
                                'success'
                            ).then(() => {
                                location.reload();
                            });
                        });
                    }).catch(err => {
                        e.path[0].innerHTML = "Register";
                        Swal.fire({
                            type: 'error',
                            title: 'ERROR!',
                            text: err.message
                        })
                    });
                }).catch(err => {
                    e.path[0].innerHTML = "Register";
                    Swal.fire({
                        type: 'error',
                        title: 'ERROR!',
                        text: err.message
                    })
                });
            } else {
                e.path[0].innerHTML = "Register";
                Swal.fire({
                    type: 'error',
                    title: 'ERROR!',
                    text: "ERROR, There Are Some Empty Fields"
                })
            }
        },
        Login(){
            var email = $("#LOGemail").val();
            var password = $("#LOGpass").val();
            auth.login(email, password).then(() => {
            
                db.get(`users/${auth.user().uid}`).then(res => {
                    Swal.fire(
                        'تم تسجيل الدخول بنجاح!',
                        `مرحباً ${res.data[5]}`,
                        'success'
                    ).then(() => {
                        location.reload();
                    });
                });
                
            }).catch(err => {
                Swal.fire({
                    type: 'error',
                    title: 'ERROR!',
                    text: err.message
                })
            });
        },
        logout(){
            Swal.fire({
                title: 'هل تريد تسجيل الخروج؟',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'نعم'
            }).then((result) => {
                if (result.value) {
                    auth.logout().then(location.reload());
                }
            })
        },
        reset(){
            let email = $("#RESETemail").val();
            if(email != false){
                auth.resetPassword(email).then(() => {
                    Swal.fire(
                        'تم إرسال كلمة المرور الجديدة إلى بريدك الالكتروني!',
                        `قم بمراجعة بريدك لاتمام إسترجاع كلمة المرور`,
                        'success'
                    ).then(() => {
                        $(".close-modal").click();
                    });
                }).catch(err => {
                    Swal.fire({
                        type: 'error',
                        title: 'ERROR!',
                        text: err.message
                    })
                });
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'ERROR!',
                    text: "ERROR, Enter Email Address"
                })
            }
        },
        editUsername(){
            var username = $("#EDIT_PROFILEusername").val();
            if(username != false){
                db.update(`users/${auth.user().uid}`, { username }).then(() => {
                    Swal.fire(
                        'تم تعديل أسم المستخدم بنجاح!',
                        ``,
                        'success'
                    ).then(() => {
                        location.reload();
                    });
                });
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'ERROR!',
                    text: "ERROR, There Are Some Empty Fields"
                })
            }
        },
        editPassword(){
            var old_password = $("#OldEDIT_PROFILEpass").val();
            var new_password = $("#NewEDIT_PROFILEpass").val();
            if(old_password != false && new_password != false){
                firebase.auth().currentUser.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(auth.user().email, old_password)).then(() => {
                    auth.updatePassword(new_password).then(() => {
                        Swal.fire(
                            'تم تعديل كلمة المرور بنجاح!',
                            ``,
                            'success'
                        ).then(() => {
                            location.reload();
                        });
                    }).catch(err => {
                        Swal.fire({
                            type: 'error',
                            title: 'ERROR!',
                            text: err.message
                        })
                    });
                }).catch(err => {
                    Swal.fire({
                        type: 'error',
                        title: 'ERROR!',
                        text: err.message
                    })
                });
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'ERROR!',
                    text: "ERROR, There Are Some Empty Fields"
                })
            }
        },
        editPicture(e){
            e.path[0].innerHTML = "Uploading Picture ....";
            var image = $("#EDIT_PROFILEpic").val();
            if(image != false){
                storage.upload("#EDIT_PROFILEpic", `users/${auth.user().uid}`).then(url => {
                    db.update(`users/${auth.user().uid}`, { image: url }).then(() => {
                        Swal.fire('تم تعديل الصورة الشخصية بنجاح!',``,'success').then(() => {
                            location.reload();
                        });
                    });
                }).catch(err => {
                    e.path[0].innerHTML = "Edit Picture";
                    Swal.fire({
                        type: 'error',
                        title: 'ERROR!',
                        text: err.message
                    })
                });
            } else {
                e.path[0].innerHTML = "Edit Picture";
                Swal.fire({
                    type: 'error',
                    title: 'ERROR!',
                    text: "ERROR, There Are Some Empty Fields"
                })
            }
        }
    },
    created(){
        auth.onLogin(() => {
            db.get(`users/${auth.user().uid}`).then(res => {
                $(".loggedIn").show();
                $(".buttons").remove();
                $(".loggedIn span").text(res.data[5]);
                $("#EDIT_PROFILEusername").val(res.data[5]);
                $("#EDIT_PROFILE_PIC_Preview").attr("src", res.data[2]);
                $(".loggedIn img").attr("src", res.data[2]);
                if(res.data[0] == false){
                    $(".adminpanel").remove();
                    $("#ADMIN_PANEL").remove();
                    $(".cont").css("top", 0);
                } else {
                    db.get(`messages`, {
                        order: {
                            type: "child",
                            value: "perority"
                        },
                        sort: ["perority"]
                    }).then(res => {
                        res.data.forEach(msg => {
                            this.messages.push(msg);
                        });
                    });
                }
            });
        });
        auth.onNoUser(() => {
            $(".loggedIn").remove();
            $("#EDIT_PROFILE").remove();
        });
    }
};
</script>
