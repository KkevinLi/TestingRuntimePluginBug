"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var nativescript_testplugin_1 = require("nativescript-testplugin");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        console.log("HJI");
        console.log(BrokenClass.Test());
        _this.testplugin = new nativescript_testplugin_1.Testplugin();
        _this.message = _this.testplugin.message;
        return _this;
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELG1FQUFxRDtBQUVyRDtJQUFxQyxtQ0FBVTtJQUk3QztRQUFBLFlBQ0UsaUJBQU8sU0FNUjtRQUpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0NBQVUsRUFBRSxDQUFDO1FBQ25DLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7O0lBQ3pDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFaRCxDQUFxQyx1QkFBVSxHQVk5QztBQVpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFRlc3RwbHVnaW4gfSBmcm9tICduYXRpdmVzY3JpcHQtdGVzdHBsdWdpbic7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSB0ZXN0cGx1Z2luOiBUZXN0cGx1Z2luO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkhKSVwiKTtcbiAgICBjb25zb2xlLmxvZyhCcm9rZW5DbGFzcy5UZXN0KCkpO1xuICAgIHRoaXMudGVzdHBsdWdpbiA9IG5ldyBUZXN0cGx1Z2luKCk7XG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy50ZXN0cGx1Z2luLm1lc3NhZ2U7XG4gIH1cbn1cbiJdfQ==