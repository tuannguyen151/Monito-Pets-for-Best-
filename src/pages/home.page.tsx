import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import CaretCircleRight from '@/components/atoms/icons/CaretCircleRight'

const Home = () => (
  <div className='[&>*:nth-child(even)]:bg-state-blue/10 [&>*:nth-child(odd)]:bg-state-orange/10'>
    <div className='flex gap-4'>
      <div>
        <Button>DEFAULT</Button>
      </div>

      <div>
        <Button variant='disabled'>DISABLED</Button>
      </div>

      <div>
        <Button variant='roundedFull'>
          <CaretCircleRight />
        </Button>
      </div>

      <div>
        <Button>
          <CaretCircleRight />

          <span>BUTTON WITH ICON</span>

          <CaretCircleRight />
        </Button>
      </div>

      <div>
        <Button variant='outline'>OUTLINE</Button>
      </div>
    </div>

    <div className='flex gap-4'>
      <Input
        label='Label'
        leftIcon={<CaretCircleRight />}
        rightIcon={<CaretCircleRight />}
        subLabel='subLabel'
        assistive={<h1 className='text-state-pink'>Error</h1>}
        placeholder='Placeholder'
      />
    </div>
  </div>
)

export default Home
