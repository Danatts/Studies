# Autenticación

## Paso a paso para registro y autenticación

1. Tomar contraseña que ingresa el usuario.
2. **Encriptar** contraseña y almacenar en base de datos ( **Middleware** al modificar).
3. Tomar contraseña que ingresa el usuario.
4. Crear **método** en el modelo que compare contraseña.
5. Devolver resultado correspondiente.

## Detalles

Para encriptar se puede hacer uso de la librería `bcrypt` de node en combinación
con el método `Schema.prototype.pre()` de mongoose para guardar a un usuario
nuevo con la contraseña ya encriptada.

```js
UserSchema.pre('save', async function (next) {
    const user = this;
    try {
    if (!user.isModified('password')) {
    return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
    } catch (err) {
    return next(err);
    }
    });
```

Para comparar si una contraseña ingresada es igual a la registrada se puede
crear un método al esquema del modelo en mongoose que compare usando la
función de la librería `bcrypt`.

```js
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    return isMatch;
  }
  catch (err) {
    throw new Error(err);
  }
};
```
