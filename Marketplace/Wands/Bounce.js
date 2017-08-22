(function () {
    var _this = this;
    _this.preload = function (entityID) {
        _this.entityID = entityID;
        var props = Entities.getEntityProperties(entityID);
        Entities.editEntity(entityID, {"dynamic" : true});
        print("Dynamic True");
        var newProperties = {
            dynamic: true,
            //since -9.8 is gravity I changed it to positive 2
            gravity: {x: 0, y: -2, z: 0},
            //Makes it bounce
            restitution: 0.9,
            //change both linear and angular damping for increased bounce
            damping: 0.0,
            angularDamping: 0.0
        };
        Entities.editEntity(entityID, newProperties);
    }

    _this.unload = function (entityID) {
    }
})