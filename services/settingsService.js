const boom = require('@hapi/boom');
class settingsService {
  constructor() {
    this.menu = {
      items: [
        {
          order: 1,
          name: 'Inicio',
          icon: 'IoHome',
          link: '/',
          permissions: 'read_only',
        },
        {
          order: 2,
          name: 'Clientes',
          icon: 'IoPersonSharp',
          link: '/',
          permissions: 'read_only',
        },
        {
          order: 3,
          name: 'Conexiones',
          icon: 'MdConnectWithoutContact',
          link: '/',
          permissions: 'read_only',
        },
        {
          order: 4,
          name: 'Mapa FFTTH',
          icon: 'FaMapMarkedAlt',
          link: '/',
          permissions: 'read_only',
        },
        {
          order: 5,
          name: 'Reportes',
          icon: 'IoDocumentTextSharp',
          permissions: 'read_only',
          subItems: [
            {
              name: 'Tickets',
              link: '/reports/tickets',
              permissions: 'read_only',
            },
            {
              name: 'Instalaciones',
              link: '/reports/installations',
              permissions: 'read_only',
            },
            {
              name: 'Mantenimientos',
              link: '/reports/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Bajas',
              link: '/reports/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Morosos',
              link: '/reports/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Localidades',
              link: '/reports/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Onus',
              link: '/reports/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Nodos',
              link: '/reports/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Log',
              link: '/reports/defaulter',
              permissions: 'read_only',
            },
          ],
        },
        {
          order: 6,
          name: 'Herramientas',
          icon: 'FaTools',
          link: '/',
          permissions: 'read_only',
          subItems: [
            {
              name: 'Cortar Morosos Masivo',
              link: '/herramientas/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Activar Morosos Masivo',
              link: '/herramientas/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Ver Log Microtik',
              link: '/herramientas/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Backup base de datos',
              link: '/herramientas/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Reconstruir tablas de radius',
              link: '/herramientas/defaulter',
              permissions: 'read_only',
            },
          ],
        },
        {
          order: 7,
          name: 'FFTTH',
          icon: 'FaTools',
          link: '/',
          permissions: 'read_only',
          subItems: [
            {
              name: 'Buscar por ONU por MAC',
              link: '/FFTTH/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Autorizar ONU',
              link: '/FFTTH/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Reporte Odbs',
              link: '/FFTTH/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Odbs',
              link: '/FFTTH/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Otts',
              link: '/FFTTH/defaulter',
              permissions: 'read_only',
            },
          ],
        },
        {
          order: 8,
          name: 'Administrar',
          icon: 'MdAdminPanelSettings',
          link: '/',
          permissions: 'read_only',
          subItems: [
            {
              name: 'Localidades',
              link: '/administrar/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Nodos',
              link: '/administrar/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Planes',
              link: '/administrar/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'NAS',
              link: '/administrar/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Usuarios',
              link: '/administrar/defaulter',
              permissions: 'read_only',
            },
          ],
        },
        {
          order: 9,
          name: 'Inventario',
          icon: 'MdInventory',
          link: '/',
          permissions: 'read_only',
          subItems: [
            {
              name: 'Articulos',
              link: '/inventario/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Depositos',
              link: '/inventario/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Proveedor',
              link: '/inventario/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Por tecnicos',
              link: '/inventario/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Entregar Mercaderia',
              link: '/inventario/defaulter',
              permissions: 'read_only',
            },
          ],
        },
        {
          order: 10,
          name: 'Tickets',
          icon: 'IoTicketSharp',
          link: '/',
          permissions: 'read_only',
          subItems: [
            {
              name: 'Sin asignar',
              link: '/tickets/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Asignados',
              link: '/tickets/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Cerrados',
              link: '/tickets/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'A facturar',
              link: '/tickets/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'En revision',
              link: '/tickets/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Eventos',
              link: '/tickets/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Busqueda Avanzada',
              link: '/tickets/defaulter',
              permissions: 'read_only',
            },
          ],
        },
        {
          order: 11,
          name: 'Configuraciones',
          icon: 'GrConfigure',
          link: '/',
          permissions: 'read_only',
          subItems: [
            {
              name: 'Tickets',
              link: '/configuraciones/defaulter',
              permissions: 'read_only',
            },
            {
              name: 'Conexiones',
              link: '/configuraciones/defaulter',
              permissions: 'read_only',
            },
          ],
        },
        {
          order: 12,
          name: 'Desconectar',
          icon: 'FaPowerOff',
          link: '/',
          permissions: 'read_only',
        },
      ],
    };
  }

  find() {
    (resolve, reject) => {
      setTimeout(() => {
        resolve(this.menu);
      }, 2000);
    };
  }
}

module.exports = settingsService;
