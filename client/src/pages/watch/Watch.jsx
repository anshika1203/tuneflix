import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import "./watch.scss";
import ReactPlayer from "react-player";
export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const isSubscribed = currentUser.subscribed;
  console.log(currentUser);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
        </div>
      </Link>
      {isSubscribed !== "null" ? (
        <ReactPlayer
          className="player"
          width="80vw"
          height="90vh"
          url={movie.trailer}
          playing="true"
          controls="true"
        />
      ) : (
        <div className="subscription">
          <h3 style={{color:'white'}}>Please Subscribe To Watch Your Favourite List..</h3>
          <div className="gpay">
          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: "1.00",
                currencyCode: "INR",
                countryCode: "IN",
              },
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("load payment data", paymentRequest);
            }}
          />
          </div>
        </div>
      )}
    </div>
  );
}
