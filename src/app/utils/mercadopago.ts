import { initMercadoPago } from "@mercadopago/sdk-react";
initMercadoPago("TEST-1d266609-07fb-46bd-94f0-28e17a17333e");

export const initialization = {
  amount: 100,
  preferenceId: "<PREFERENCE_ID>",
};
export const customization = {
  visual: {
    style: {
      theme: "dark",
    },
  },
  paymentMethods: {
    creditCard: "all",
    debitCard: "all",
    ticket: "all",
    bankTransfer: "all",
    atm: "all",
    onboarding_credits: "all",
    wallet_purchase: "all",
    maxInstallments: 1,
  },
};
export const onSubmit = async ({ selectedPaymentMethod, formData }: any) => {
  // callback llamado al hacer clic en el botón enviar datos
  return new Promise((resolve, reject) => {
    fetch("/process_payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        // recibir el resultado del pago
        resolve(response);
      })
      .catch((error) => {
        // manejar la respuesta de error al intentar crear el pago
        reject();
      });
  });
};
export const onError = async (error: any) => {
  // callback llamado para todos los casos de error de Brick
  console.log(error);
};
export const onReady = async () => {
  /*
      Callback llamado cuando el Brick está listo.
      Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */
};
