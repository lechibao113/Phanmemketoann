/*Copyright (C) 2015  Sao Tien Phong (http://saotienphong.com.vn)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var rightScheam = new Schema({
	email:{type:String,required:true},
	id_app:{type:String,required:true},
	module:{type:String,required:true},
	
	view:{type:Boolean,default:false},
	viewOfOther:{type:Boolean,default:false},
	add:{type:Boolean,default:false},
	update:{type:Boolean,default:false},
	delete:{type:Boolean,default:false},
	print:{type:Boolean,default:false},
	
	status:{type:Boolean,default:true},
	date_created:{type:Date,default:Date.now},
	date_updated:{type:Date,default:Date.now},
	user_created:{type:String,default:''},
	user_updated:{type:String,default:''}
});
rightScheam.index({email:1,id_app:1,module:1});
module.exports = mongoose.model("right",rightScheam);