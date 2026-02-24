# Prompt para definición de features

Actúa como Product Manager técnico. Vamos a definir una feature siguiendo este proceso estructurado.

Lee `CLAUDE.md` para contexto adicional del proyecto específico.

---

## FASE 1: Especificación Funcional

Antes de proponer nada, hazme preguntas para entender:

- ¿Quién es el usuario y cuál es su contexto?
- ¿Qué problema específico resuelve esta feature?
- ¿Cuál es el flujo completo desde la perspectiva del usuario?
- ¿Qué casos edge o errores debemos manejar?

Luego documenta:

1. **User Stories**: Como [rol], quiero [acción], para [beneficio]
2. **Criterios de aceptación**: Lista verificable de condiciones que debe cumplir
3. **Flujo de usuario**: Paso a paso de la interacción
4. **Estados y mensajes**: Qué ve el usuario en cada estado (éxito, error, carga, vacío)
5. **Métricas de éxito**: ¿Cómo medimos que la feature funciona?

### Alcance

- **Incluido**: [qué entra en esta iteración]
- **Excluido**: [qué NO entra, para evitar scope creep]

**Criterio de avance**: Responde "OK" para continuar a Fase 2, o indica qué ajustar.

---

## FASE 2: Diseño Técnico

1. **Análisis del código existente**: Identifica archivos, modelos y patrones relevantes en el proyecto
2. **Modelo de datos** (schema.ts):
   - ¿Nuevos tipos con @model o modificaciones a existentes?
   - ¿Qué directivas necesita? (@auth, @default, @mongoIndexes)
   - ¿Necesita lifecycle hooks? (@preCreate, @postCreate, @preUpdate, etc.)
   - ¿Notificaciones automáticas? (@email)
3. **APIs**:
   - ¿El CRUD automático es suficiente o necesita resolver custom?
   - Si necesita resolver: definir firma en schema.ts y ubicación en src/resolvers/
   - ¿Necesita @profileMutation para operaciones sobre el perfil?
4. **Componentes UI**:
   - ¿Qué componentes de ui/ reutilizar?
   - ¿Nueva carpeta en components/[dominio]/?
5. **Integraciones**: Webhooks, servicios externos, handlers de email

**Criterio de avance**: Responde "OK" para continuar a Fase 3, o indica qué ajustar.

---

## FASE 3: Plan de Implementación

Genera una lista de tareas que cumplan:

- Cada tarea es completable en menos de 2 horas
- Las tareas tienen dependencias explícitas (qué debe completarse antes)
- Incluyen archivos específicos a crear/modificar
- Son verificables (cómo saber que está completa)

Formato por tarea:

```
- [ ] **[Área]** Descripción concreta
  - Archivos: `ruta/archivo.ts`
  - Depende de: [#tarea]
  - Verificación: [cómo probar que funciona]
```

**Criterio de avance**: Responde "OK" para continuar a Fase 4, o indica qué ajustar.

---

## FASE 4: Documentar y Ejecutar

### 4.1 Crear estructura de documentación

1. Definir nombre del feature en inglés (ej: `mega-menu-recommendations`)
2. Crear carpeta en `docs/features/[nombre-feature]/` con:
   - `FEATURE.md`: Comportamiento esperado (incluir resumen de 1-2 párrafos al inicio)
   - `TODO.md`: Tareas técnicas del plan de implementación
   - `implementation/`: Carpeta para documentar cada fase completada

### 4.2 Ejecutar el plan

1. Pedir confirmación para comenzar el primer paso
2. Ejecutar paso a paso, pidiendo confirmación entre cada uno
3. Al completar un paso, marcarlo como listo en `TODO.md`
4. Documentar lo realizado en `implementation/paso-N.md`

---

## RETOMAR PROYECTO INCOMPLETO

Si retomas un proyecto existente:

1. Lee `FEATURE.md` → entender qué se quiere lograr
2. Lee `TODO.md` → ver qué falta
3. Lee `implementation/*.md` → entender qué ya se hizo
4. Continúa desde el último paso incompleto

---

## INICIAR

La feature a definir es: **[DESCRIPCIÓN]**