export interface Props {
  title: string
}

const OgTemplate = (props: Props) => {
  const css = `
  `

  return (
    <html>
      <style dangerouslySetInnerHTML={{__html: css}}/>
    </html>
  )
}