import TypeWriter from "typewriter-effect";

export default function TypeEffect() {
  return (
    <>
      <TypeWriter
        options={{
          strings: [
            "برنامه نویس و توسعه دهنده ی فول استک و علاقمند به یادگیری !",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
